import React from "react";
import ButtonPopup from "./page_components/mainpage/button-popup";
import ListMobil from "./productlist";

class MainContent extends React.Component {
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
