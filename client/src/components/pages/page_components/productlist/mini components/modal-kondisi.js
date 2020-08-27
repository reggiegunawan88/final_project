import React from "react";
import "../../../../style/modal.css";
import { Button, Modal } from "react-bootstrap";
import { Dropdown, Menu } from "semantic-ui-react";

const options = [
  { key: 1, text: "Choice 1", value: 1 },
  { key: 2, text: "Choice 2", value: 2 },
  { key: 3, text: "Choice 3", value: 3 },
];

class ModalKriteria extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueCheckbox: "",
    };
  }

  onChangeCheckbox(event) {
    console.log(event.target.name);
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
            Pilih Kondisi Mobil Bekas
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form align-content-center">
            <div className="row">
              <div className="col-12">
                <p id="label-txt">FAKTOR SUBJEKTIF-1 : </p>
                <div className="custom-control custom-checkbox custom-control-inline">
                  <input
                    type="checkbox"
                    name="checkbox-1"
                    value={!this.state.valueCheckbox}
                    className="custom-control-input"
                    id="defaultInline1"
                    defaultChecked={false}
                    onChange={this.onChangeCheckbox}
                  />
                  <label className="custom-control-label" for="defaultInline1">
                    YES
                  </label>
                </div>
                <div className="custom-control custom-checkbox custom-control-inline">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    id="defaultInline2"
                  />
                  <label class="custom-control-label" for="defaultInline2">
                    NO
                  </label>
                </div>
              </div>
            </div>
            {/* <div className="row">
              <div className="col-12">
                <p id="label-txt">HARGA : </p>
                <div className="centered">
                  <input type="text" placeholder="Minimum" />
                  <input type="text" placeholder="Maksimum" />
                </div>
              </div>
            </div> */}
            {/* <div className="row">
              <div className="col-12">
                <p id="label-txt">TAHUN KELUARAN : </p>
                <div className="centered">
                  <input type="text" placeholder="Minimum" />
                  <input type="text" placeholder="Maksimum" />
                </div>
              </div>
            </div> */}
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

export default ModalKriteria;
