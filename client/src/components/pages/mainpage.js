import React from "react";
import ButtonPopup from "./page_components/button-popup";
import ListMobil from "../list mobil/listmobil";

class MainContent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <ButtonPopup />
          </div>
          <div className="col-9" style={{ backgroundColor: "" }}>
            <ListMobil />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContent;
