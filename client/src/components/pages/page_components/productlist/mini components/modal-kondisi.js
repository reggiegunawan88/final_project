import React from "react";
import "../../../../style/modal.css";
import { Button, Modal } from "react-bootstrap";

class ModalKondisi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valueCheckbox: "",
    };
  }

  onChangeCheckbox = (event) => {
    this.setState({ valueCheckbox: event.target.name });
    console.log(event.target.name);
    console.log(this.state.valueCheckbox);
  };
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
                    name="checkbox-1"
                    className="custom-control-input"
                    id="defaultInline2"
                  />
                  <label className="custom-control-label" for="defaultInline2">
                    NO
                  </label>
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

export default ModalKondisi;
