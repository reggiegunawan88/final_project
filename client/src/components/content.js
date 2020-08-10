import React from "react";
import ButtonLayout from "./buttonLayout";
import ListMobil from "./listmobil";

class Content extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3">
            <ButtonLayout />
          </div>
          <div className="col-9" style={{ backgroundColor: "lightblue" }}>
            <ListMobil />
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
