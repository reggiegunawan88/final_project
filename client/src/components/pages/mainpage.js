import React from "react";
import ButtonPopup from "./../page_components/button-popup/button-popup";
import ProductList from "./productlist";
import put_imgArray from "./../function/combine_array";
import axios from "axios";

class MainPage extends React.Component {
  state = {
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
    showPriorityBtn: true,
    //state reuse for BrownGibson elimination
    harga1: null,
    harga2: null,
    tahun1: null,
    tahun2: null,
  };

  componentDidMount() {
    this.get_data_mobil();
  }

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
          });
        })
      )
      .catch((errors) => {
        console.log(errors);
      });
  }

  //set new items to render when button SECC clicked
  get_SECC_result(results, SECC_data) {
    axios.get("http://localhost:5000/naripanmotor_img").then((response) => {
      let processedItems = put_imgArray(results, response.data);
      this.setState({
        items: processedItems,
        itemsTotal: results.length,
        disableModalProps: false,
        btnModalColor: "success",
        showResetBtn: false,
        showPriorityBtn: false,
        harga1: SECC_data.harga1,
        harga2: SECC_data.harga2,
        tahun1: SECC_data.tahun1,
        tahun2: SECC_data.tahun2,
      });
    });
  }

  //set items into final result Brown Gibson
  get_BG_result(data) {
    let result = data;
    result.sort((a, b) => (a.LPM < b.LPM ? 1 : -1)); //sort LPM value descending
    this.setState({
      items: data,
      showResetBtn: false,
      showPriorityBtn: true,
    });
  }

  //reset page when button reset clicked
  reset_page() {
    window.location.reload();
  }

  render() {
    //loading if state is still null
    if (this.state.items[0] === undefined) {
      <ButtonPopup
        onReceiveProps={(results, SECC_data) =>
          this.get_SECC_result(results, SECC_data)
        }
        onReset={() => this.reset_page()}
        disableModalProps={this.state.disableModalProps}
        btnModalColor={this.state.btnModalColor}
        showResetBtn={this.state.showResetBtn}
      />;
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <ButtonPopup
              onReceiveProps={(results, SECC_data) =>
                this.get_SECC_result(results, SECC_data)
              }
              onReset={() => this.reset_page()}
              btnModalColor={this.state.btnModalColor}
              showResetBtn={this.state.showResetBtn}
              showPriorityBtn={this.state.showPriorityBtn}
              getSECCData={this.state.items}
              getFinalResult={(data) => this.get_BG_result(data)}
            />
          </div>
          <div className="col-9" style={{ backgroundColor: "" }}>
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
