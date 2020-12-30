import React from "react";
import ButtonPopup from "./../page_components/button-popup/button-popup";
import ProductList from "./productlist";
import put_imgArray from "./../function/combine_array";
import axios from "axios";
import queryString from "query-string";

//algorithm separated file
import calculate_LPM from "./../function/brown-gibson";

class MainPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      items: [],
      items_img: [],
      itemsTotal: 0,

      //state for 2nd modal button available
      disableModalProps: true,

      //initial color for 2nd modal btn
      btnModalColor: "success",

      //show choose, reset and priority modal btn
      hideChooseBtn: false,
      hideResetBtn: true,
      hidePriorityBtn: true,

      //show short note (keterangan) for BG value
      hideKeteranganTxt: true,

      //state reuse for BrownGibson elimination
      harga1: null,
      harga2: null,
      tahun1: null,
      tahun2: null,

      //algorithm succesfully applied indicator
      BG_algorithm_done: false,
    };
  }

  componentDidMount() {
    this.refreshData();
  }

  async refreshData() {
    //get search query from this.props.location
    console.log(this.props);
    var query_value = queryString.parse(this.props.location.search);
    if (this.props.location.search === "") {
      this.get_data_mobil();
    } else {
      if (!this.props.location.state) {
        //if BG is not yet implemented
        await this.get_data_mobil();
        await this.search_SECC_result(query_value);
      } else {
        /**
         * Do method to get BG result on reload page from query string
         */
        //split url string
        const url_split = this.props.location.search.split("&splitquery&");
        //1. get data from query string to get weight value
        var weight_value = queryString.parse(url_split[1]);
        //2. get saved data obj from local storage
        let obj_arr = localStorage.getItem("obj_input");
        let subj_arr = localStorage.getItem("subj_input");
        let item_data = localStorage.getItem("item_list");
        let input_data = {
          secc_data: JSON.parse(item_data),
          obj_input: JSON.parse(obj_arr),
          subj_input: JSON.parse(subj_arr),
          obj_weight: parseFloat(weight_value.obj_weight),
          subj_weight: parseFloat(weight_value.subj_weight),
        };

        //3. callback handle function
        await this.handle_BG_result(input_data);
      }
    }
  }

  //ajax all items
  get_data_mobil() {
    // do ajax
    const requestOne = axios.get("http://localhost:5000/mobil");
    const requestTwo = axios.get("http://localhost:5000/naripanmotor_img");

    // get multiple response from requested server
    axios
      .all([requestOne, requestTwo])
      .then(
        axios.spread((response1, response2) => {
          let processedItems = put_imgArray(response1.data, response2.data);
          this.setState({
            items: processedItems,
            isLoading: false,
            itemsTotal: response1.data.length,
            items_img: response2.data,
          });
        })
      )
      .catch((errors) => {
        console.log(errors);
      });
  }

  //function to setQuery into this.props.query
  set_query_SECC(query_data) {
    var query_string = queryString.stringify(query_data);
    this.props.history.push("/carimobil/?" + query_string);
  }

  set_query_BG(data1, data2) {
    let weight_data = {
      obj_weight: data1,
      subj_weight: data2,
    };
    var weight_query = queryString.stringify(weight_data);
    var query_string =
      this.props.location.search + "&splitquery&" + weight_query;
    this.props.history.push({ search: query_string, state: true });
  }

  //function to search query
  search_SECC_result(filter_data) {
    //*set query string
    this.set_query_SECC(filter_data);
    axios
      .post("http://localhost:5000/mobil/result_SECC", filter_data, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          accept: "application/json",
        },
      })
      .then((response) => {
        this.render_SECC_result(response.data, filter_data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  //set new items to render when button SECC clicked
  render_SECC_result(results, filter_data) {
    let processedItems = put_imgArray(results, this.state.items_img);
    //set item list into local storage
    localStorage.setItem("item_list", JSON.stringify(processedItems));
    this.setState({
      items: processedItems,
      itemsTotal: results.length,
      disableModalProps: false,
      btnModalColor: "success",
      hideResetBtn: false,
      hidePriorityBtn: results.length <= 2 ? true : false,
      hideKeteranganTxt: true,
      harga1: filter_data.harga1,
      harga2: filter_data.harga2,
      tahun1: filter_data.tahun1,
      tahun2: filter_data.tahun2,
    });
  }

  //set items state into final result Brown Gibson
  handle_BG_result(input_data) {
    this.set_query_BG(
      parseFloat(input_data.obj_weight),
      parseFloat(input_data.subj_weight)
    );

    //store user input data into local storage
    localStorage.setItem("obj_input", JSON.stringify(input_data.obj_input));
    localStorage.setItem("subj_input", JSON.stringify(input_data.subj_input));
    let result_BG = calculate_LPM(
      input_data.secc_data,
      input_data.obj_input,
      input_data.subj_input,
      input_data.obj_weight,
      input_data.subj_weight
    );

    //sort LPM value descending
    result_BG.sort((a, b) => (a.LPM < b.LPM ? 1 : -1));
    this.setState({
      items: result_BG,
      hideChooseBtn: true, //when BG done, user must reset the page to do another SPK
      hideResetBtn: false,
      hidePriorityBtn: false,
      hideKeteranganTxt: false,
      BG_algorithm_done: true,
      isLoading: false,
      itemsTotal: result_BG.length,
    });
  }

  //go to landing page when button reset clicked
  reset_page() {
    this.props.history.replace({ state: undefined });
    window.location.href = "/carimobil";
  }

  sort_by(sorted_items) {
    this.setState({ items: sorted_items });
  }

  render() {
    //loading if state is still null
    if (this.state.items[0] === undefined) {
      <ButtonPopup
        onReceiveProps={(filter_data) => this.search_SECC_result(filter_data)}
        onReset={() => this.reset_page()}
        btnModalColor={this.state.btnModalColor}
        showChooseBtn={this.state.showChooseBtn}
        showResetBtn={this.state.showResetBtn}
        hidePriorityBtn={true}
        hideKeteranganText={true}
      />;
    }

    return (
      <div className="container" style={{ height: "100%" }}>
        <div className="row">
          <div className="col-3">
            <ButtonPopup
              onReceiveProps={(results, SECC_data) =>
                this.search_SECC_result(results, SECC_data)
              }
              onReset={() => this.reset_page()}
              btnModalColor={this.state.btnModalColor}
              hideChooseBtn={this.state.hideChooseBtn}
              hideResetBtn={this.state.hideResetBtn}
              hidePriorityBtn={this.state.hidePriorityBtn}
              hideKeteranganText={this.state.hideKeteranganTxt}
              getSECCData={this.state.items}
              getFinalResult={(input_data) => this.handle_BG_result(input_data)}
            />
          </div>
          <div className="col-9" style={{ top: 100 }}>
            <ProductList
              items={this.state.items}
              loading={this.state.isLoading}
              itemsTotal={this.state.itemsTotal}
              triggerSortBy={(items) => this.sort_by(items)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
