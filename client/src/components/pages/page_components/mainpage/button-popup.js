import React from "react";
import { Button } from "react-bootstrap";
import "./../../../style/buttonlayout.css";
import ModalKriteria from "../productlist_components/mini components/modal-kriteria";
import ModalKondisi from "../productlist_components/mini components/modal-kondisi";

class ButtonLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModalKriteria: false,
      showModalKondisi: false,
      activeModal: "",
    };
  }

  render() {
    let closeModalKriteria = () => this.setState({ showModalKriteria: false });
    let closeModalKondisi = () => this.setState({ showModalKondisi: false });
    return (
      <div className="container filter-container">
        <div className="row justify-content-md-center m-2">
          <p style={{ fontSize: 20, fontWeight: "bold", color: "red" }}>
            CARI MOBIL
          </p>
        </div>
        <div className="row justify-content-md-center m-2">
          <h2 className="separator-line" />
        </div>
        <div className="row justify-content-md-center m-2">
          <Button
            variant="primary"
            onClick={() => this.setState({ showModalKriteria: true })}
          >
            Pilih Mobil
          </Button>
          <ModalKriteria
            show={this.state.showModalKriteria}
            onHide={closeModalKriteria}
          />
        </div>
        <div className="row justify-content-md-center m-2">
          <Button
            variant="secondary"
            onClick={() => this.setState({ showModalKondisi: true })}
          >
            Pilih Kondisi
          </Button>
          <ModalKondisi
            show={this.state.showModalKondisi}
            onHide={closeModalKondisi}
          />
        </div>
      </div>
    );
  }
}

export default ButtonLayout;
