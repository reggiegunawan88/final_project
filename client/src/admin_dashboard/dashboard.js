import React from "react";
import Navbar from "./components/navbar";
import { Button } from "react-bootstrap";
import "./style/dashboard.css";

const dashboard = (props) => {
  function handle_btn_mobil() {
    props.history.push("/keloladatamobil");
  }

  function handle_btn_merk() {
    props.history.push("/kelolamerkmobil");
  }

  function handle_btn_tipe() {
    props.history.push("/keloladatamobil");
  }

  return (
    <div>
      <Navbar />
      <div
        className="container"
        style={{
          marginTop: "100px",
          justifyContent: "center",
        }}
      >
        <div className="main-content">
          <h3>Selamat datang, Admin</h3>
          <div style={{ display: "inline-flex", alignItems: "center" }}>
            <Button
              className="btn-keloladata"
              variant="primary"
              onClick={handle_btn_merk}
            >
              <b>KELOLA DATA MERK MOBIL</b>
            </Button>
            <Button
              className="btn-keloladata"
              variant="primary"
              onClick={handle_btn_mobil}
            >
              <b>KELOLA DATA MOBIL</b>
            </Button>
            <Button
              className="btn-keloladata"
              variant="primary"
              onClick={handle_btn_tipe}
            >
              <b>KELOLA DATA TIPE MOBIL</b>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
