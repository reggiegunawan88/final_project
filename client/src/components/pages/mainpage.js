import React from "react";
import ButtonPopup from "./page_components/mainpage/button-popup";
import ProductList from "./productlist";
import axios from "axios";

class MainPage extends React.Component {
  state = {
    isLoading: true,
    items: [],
    itemsTotal: 0,

    //state for 2nd modal button available
    disableModalProps: true,

    //initial color for 2nd modal btn
    btnModalColor: "secondary",

    //show reset btn
    showResetBtn: true,

    //state dipakai lagi untuk eliminasi BG
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
    axios
      .get("http://localhost:5000/mobil", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      // get response from requested server
      .then((response) => {
        this.setState({
          items: response.data,
          isLoading: false,
          itemsTotal: response.data.length,
        });
      })
      .catch((error) => this.setState({ isLoading: false }));
  }

  get_SECC_result(results) {
    this.setState({
      items: results,
      itemsTotal: results.length,
      disableModalProps: false,
      btnModalColor: "success",
      showResetBtn: false,
    });
  }

  //reset page when button reset clicked
  reset_page() {
    window.location.reload();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <ButtonPopup
              onReceiveProps={(results) => this.get_SECC_result(results)}
              onReset={() => this.reset_page()}
              disableModalProps={this.state.disableModalProps}
              btnModalColor={this.state.btnModalColor}
              showResetBtn={this.state.showResetBtn}
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
