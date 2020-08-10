import React from "react";
import "./style/listmobil.css";

class ListMobil extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-6">
            <h3>Ditemukan: 50 mobil</h3>
          </div>
          <div className="col-6">
            <h3>Urutkan:</h3>
          </div>
        </div>
        <h2 />
        <div className="row">
          <div className="col-4">
            <h3>Card 1</h3>
          </div>
          <div className="col-4">
            <h3>Card 2</h3>
          </div>
          <div className="col-4">
            <h3>Card 3</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <h3>Card 4</h3>
          </div>
          <div className="col-4">
            <h3>Card 5</h3>
          </div>
          <div className="col-4">
            <h3>Card 6</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default ListMobil;
