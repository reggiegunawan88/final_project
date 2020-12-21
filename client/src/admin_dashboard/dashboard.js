import React from "react";
import Navbar from "./components/navbar";
import { Button } from "react-bootstrap";
import "./style/dashboard.css";

const dashboard = (props) => {
  function handle_btn() {
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
          <Button
            className="btn-keloladata"
            variant="primary"
            onClick={handle_btn}
          >
            <b>KELOLA DATA MOBIL</b>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default dashboard;
