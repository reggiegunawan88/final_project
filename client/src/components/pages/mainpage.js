import React from "react";
import ButtonPopup from "./page_components/mainpage/button-popup";
import ProductList from "./productlist";
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
    const requestOne = axios.get("http://localhost:5000/mobil");
    const requestTwo = axios.get("http://localhost:5000/naripanmotor_img");

    // get multiple response from requested server
    axios
      .all([requestOne, requestTwo])
      .then(
        axios.spread((response1, response2) => {
          let processedItems = this.put_imgArray(response1.data,response2.data);
          this.setState({
              items: processedItems,
              // items_img: response2.data,
              isLoading: false,
              itemsTotal: response1.data.length,
          });
        })
      )
      .catch((errors) => {
        console.log(errors);
      });
  }

  put_imgArray = (items, items_img) => {
    let clone_items = [...items]; //clone from state
    let clone_itemsImg = [...items_img]; //clone from state
    let img_arr = []; //initial empty temp arr for img
    for (let i = 0; i < items.length; i++) {
      // console.log("MOBIL KE-" + (i + 1));
      for (let j = 0; j <= clone_itemsImg.length; j++) {
        if (items[i].idmobil === clone_itemsImg[0].idmobil) {
          // debugger
          // console.log(
          //   "id mobil: " + this.state.items[i].idmobil,
          //   "id_imgmobil: " + clone_itemsImg[0].idmobil
          // );

          //put img into arr temp
          // img_arr.push(clone_itemsImg[0].img_url);
          img_arr.push({url: clone_itemsImg[0].img_url })
          clone_itemsImg.shift();
          j = 0;

          //length img = 0
          if (clone_itemsImg.length == 0) {
            //set img_arr into state
            //1. assign img value to copied arr
            let item_arr = { ...clone_items[i], img: img_arr };
            //2. put back into copied arr
            clone_items[i] = item_arr;
            img_arr = [];
          }
        } else {
          if (img_arr.length) {
            //assign img value to copied arr
            let item_arr = { ...clone_items[i], img: img_arr };
            //put back into copied arr
            clone_items[i] = item_arr;
            img_arr = [];
          } else {
            break;
          }
        }
      }
    }
    //finally, return the complete array
    return clone_items;
  };

  //set new items to render when button SECC clicked
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
    //loading if state is still null
    if( this.state.items[0] === undefined ) {
      return <h3>Loading...</h3>
  }

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
