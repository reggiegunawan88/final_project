import React from "react";
import { Button } from "react-bootstrap";
import "./style/buttonlayout.css";

class ButtonLayout extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-md-center m-2">
          <p style={{ fontSize: 20, fontWeight: "bold", color: "red" }}>
            CARI MOBIL
          </p>
        </div>
        <div className="row justify-content-md-center m-2">
          <h2 />
        </div>
        <div className="row justify-content-md-center m-2">
          <Button variant="primary">Pilih Mobil</Button>
        </div>
        <div className="row justify-content-md-center m-2">
          <Button variant="secondary">Pilih Kondisi</Button>
        </div>
      </div>
    );
  }
}

export default ButtonLayout;
