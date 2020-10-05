import React from "react";
import { Button } from "react-bootstrap";
import "./../../../style/buttonlayout.css";
import ModalKriteria from "../productlist/mini components/modal-kriteria";
import ModalKondisi from "../productlist/mini components/modal-kondisi";

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
          <Button style={{ display: "block" }} variant="warning">
            RESET
          </Button>
        </div>
        <div className="row justify-content-md-center m-2">
          <p className="separator-line" />
        </div>
        <div className="row justify-content-md-center m-2">
          <Button
            variant="primary"
            onClick={() => this.setState({ showModalKriteria: true })}
          >
            PILIH MOBIL
          </Button>
          <ModalKriteria
            show={this.state.showModalKriteria}
            onHide={closeModalKriteria}
            onSearchInvoked={this.props.onSearchInvoked}
          />
        </div>
        <div className="row justify-content-md-center m-2">
          <Button
            variant="secondary"
            onClick={() => this.setState({ showModalKondisi: true })}
          >
            PILIH KONDISI
          </Button>
          <ModalKondisi
            show={this.state.showModalKondisi}
            onHide={closeModalKondisi}
            disabled
          />
        </div>
      </div>
    );
  }
}

export default ButtonLayout;
