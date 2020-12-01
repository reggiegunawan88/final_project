import React from "react";
import ButtonPopup from "./../page_components/button-popup/button-popup";
import ProductList from "./productlist";
import put_imgArray from "./../function/combine_array";
import axios from "axios";
import {
  withQueryParams,
  StringParam,
  NumberParam,
  ArrayParam,
  withDefault,
  JsonParam,
} from "use-query-params";
import queryString from "query-string";

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
      btnModalColor: "secondary",

      //show reset and priority modal btn
      showResetBtn: true,
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
    const query_value = queryString.parse(this.props.location.search);
    console.log(this.props.location.state);
    if (this.props.location.search === "") {
      this.get_data_mobil();
    } else {
      if (!this.props.location.state) {
        // debugger;
        await this.get_data_mobil();
        await this.search_SECC_result(query_value);
      } else {
        await this.get_data_mobil();
        // await this.search_SECC_result(query_value);
        console.log("bg here");
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
  set_query_url(query_data) {
    var query_string = queryString.stringify(query_data);
    this.props.history.push("/carimobil/?" + query_string);
  }

  set_query_BG(query_data) {
    // this.props.history.push("/carimobil/?");
    this.props.history.replace({ state: true });
    console.log("bg algorithm work");
  }

  //function to search query
  search_SECC_result(filter_data) {
    //*set query string
    this.set_query_url(filter_data);
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
    this.setState({
      items: processedItems,
      itemsTotal: results.length,
      disableModalProps: false,
      btnModalColor: "success",
      showResetBtn: false,
      hidePriorityBtn: results.length <= 2 ? true : false,
      hideKeteranganTxt: true,
      harga1: filter_data.harga1,
      harga2: filter_data.harga2,
      tahun1: filter_data.tahun1,
      tahun2: filter_data.tahun2,
    });
    return processedItems;
  }

  //set items into final result Brown Gibson
  get_BG_result(data, input_data) {
    this.set_query_BG(input_data);
    let result = data;
    result.sort((a, b) => (a.LPM < b.LPM ? 1 : -1)); //sort LPM value descending
    this.setState({
      items: data,
      showResetBtn: false,
      showPriorityBtn: true,
      hideKeteranganTxt: false,
      BG_algorithm_done: true,
    });
  }

  //go to landing page when button reset clicked
  reset_page() {
    this.props.history.replace({ state: undefined });
    window.location.href = "/carimobil";
  }

  render() {
    //loading if state is still null
    if (this.state.items[0] === undefined) {
      <ButtonPopup
        onReceiveProps={(filter_data) => this.search_SECC_result(filter_data)}
        onReset={() => this.reset_page()}
        btnModalColor={this.state.btnModalColor}
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
              showResetBtn={this.state.showResetBtn}
              hidePriorityBtn={this.state.hidePriorityBtn}
              hideKeteranganText={this.state.hideKeteranganTxt}
              getSECCData={this.state.items}
              getFinalResult={(data, input_data) =>
                this.get_BG_result(data, input_data)
              }
            />
          </div>
          <div className="col-9" style={{ top: 100 }}>
            <ProductList
              items={this.state.items}
              loading={this.state.isLoading}
              itemsTotal={this.state.itemsTotal}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainPage;
