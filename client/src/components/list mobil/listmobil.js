import React from "react";
import "../style/listmobil.css";
import Dropdown from "./dropdown";
import CardMobil from "./card-mobil";

class ListMobil extends React.Component {
  render() {
    return (
      <div>
        <div className="row upper-part">
          <div className="col-6">
            <p style={{ position: "relative", top: "20px" }}>
              Ditemukan: 'xxx' mobil
            </p>
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-6" style={{ textAlign: "right" }}>
                <p style={{ position: "relative", top: "20px", left: "15px" }}>
                  Urut berdasarkan:
                </p>
              </div>
              <div className="col-6">
                <div className="dropdown-area">
                  <Dropdown />
                </div>
              </div>
            </div>
          </div>
        </div>
        <h2 className="hr-line" />
        <div className="container-fluid">
          <div className="row">
            <div className="col-4">
              <CardMobil />
            </div>
            <div className="col-4">
              <CardMobil />
            </div>
            <div className="col-4">
              <CardMobil />
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <CardMobil />
            </div>
            <div className="col-4">
              <CardMobil />
            </div>
            <div className="col-4">
              <CardMobil />
            </div>
          </div>
          <div className="row">
            <div className="col-4">
              <CardMobil />
            </div>
            <div className="col-4">
              <CardMobil />
            </div>
            <div className="col-4">
              <CardMobil />
            </div>
          </div>
        </div>
        <div className="row page-pagination">
          <div className="col-12 col-md-offset-6">
            <p>1 2 3 next last</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ListMobil;
