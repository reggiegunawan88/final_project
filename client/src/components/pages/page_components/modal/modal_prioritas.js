import React from "react";
import "../../../style/modal_objektif.css";
import { Button, Modal } from "react-bootstrap";
import { Dropdown } from "semantic-ui-react";

const options = [
  { key: 1, text: "Choice 1", value: 1 },
  { key: 2, text: "Choice 2", value: 2 },
  { key: 3, text: "Choice 3", value: 3 },
];

class ModalPrioritas extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter centered">
            TETAPKAN PRIORITAS KRITERIA
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form align-content-center">
            <div className="row">
              <div className="col-12 col-md-offset-6 ">
                <p id="label-txt">MERK :</p>
                <div>
                  <Dropdown
                    id="kriteria-merk"
                    className="dropdown"
                    placeholder="--Semua--"
                    fluid
                    selection
                    options={options}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <p id="label-txt">TIPE MOBIL : </p>
                <div>
                  <Dropdown
                    id="kriteria-merk"
                    placeholder="--Semua--"
                    fluid
                    selection
                    options={options}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <p id="label-txt">KILOMETER : </p>
                <div className="centered">
                  <input type="text" placeholder="Minimum" />
                  <input type="text" placeholder="Maksimum" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <p id="label-txt">HARGA : </p>
                <div className="centered">
                  <input type="text" placeholder="Minimum" />
                  <input type="text" placeholder="Maksimum" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <p id="label-txt">TAHUN KELUARAN : </p>
                <div className="centered">
                  <input type="text" placeholder="Minimum" />
                  <input type="text" placeholder="Maksimum" />
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">CARI MOBIL</Button>
          <Button variant="danger" onClick={this.props.onHide}>
            BATAL
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ModalPrioritas;
