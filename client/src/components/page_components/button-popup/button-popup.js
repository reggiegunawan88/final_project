import React from "react";
import { Button } from "react-bootstrap";
import "./../../style/buttonlayout.css";
import ModalObjektif from "../modal/modal_objektif";
import ModalBG from "../modal/brown_gibson/modal_BG";

class ButtonLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModalObjektif: false,
      showModalSubjektif: false,
    };
  }

  render() {
    let closeModalObjektif = () => this.setState({ showModalObjektif: false });
    let closeModalSubjektif = () =>
      this.setState({ showModalSubjektif: false });
    let openModalSubjektif = () => {
      this.setState({ showModalSubjektif: true });
    };

    return (
      <div className="container filter-container">
        <div className="row justify-content-md-center m-2">
          <p style={{ fontSize: 20, fontWeight: "bold", color: "red" }}>
            CARI MOBIL
          </p>
        </div>
        <div className="row justify-content-md-center m-3">
          <Button
            className="btn-reset"
            variant="warning"
            onClick={this.props.onReset}
            hidden={this.props.showResetBtn}
          >
            RESET
          </Button>
        </div>
        <div className="row justify-content-md-center m-2">
          <p className="separator-line" />
        </div>
        <div className="row justify-content-md-center m-2">
          <Button
            className="btn-kriteria"
            variant="primary"
            onClick={() => this.setState({ showModalObjektif: true })}
          >
            PILIH MOBIL
          </Button>
          <ModalObjektif
            show={this.state.showModalObjektif}
            onHide={closeModalObjektif}
            onReceiveProps={this.props.onReceiveProps}
          />
        </div>
        <div className="row justify-content-md-center m-2">
          <Button
            className="btn-kondisi"
            variant={this.props.btnModalColor}
            disabled={false}
            onClick={() => this.setState({ showModalSubjektif: true })}
          >
            PILIH KONDISI
          </Button>
          <ModalBG
            show={this.state.showModalSubjektif}
            onHide={closeModalSubjektif}
            reopenModal={openModalSubjektif}
          />
        </div>
      </div>
    );
  }
}

export default ButtonLayout;
