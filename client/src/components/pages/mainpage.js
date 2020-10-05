import React from "react";
import ButtonPopup from "./page_components/mainpage/button-popup";
import ListMobil from "./productlist";
import axios from "axios";

class MainPage extends React.Component {
  state = {
    isLoading: true,
    items: [],
    itemsTotal: 0,

    //state dipakai lagi untuk eliminasi BG
    harga: null,
    tahun: null,
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

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <ButtonPopup
              onSearchInvoked={(results) => {
                this.setState({ items: results, itemsTotal: results.length });
              }}
              onResetPage={() => this.componentDidMount()}
            />
          </div>
          <div className="col-9" style={{ backgroundColor: "" }}>
            <ListMobil
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
