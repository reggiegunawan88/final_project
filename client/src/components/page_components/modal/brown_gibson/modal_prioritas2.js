import React from "react";
import "./../../../style/modal_prioritas2.css";
import { Button, Modal } from "react-bootstrap";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Checkbox from "@material-ui/core/Checkbox";

class ModalPrioritas2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      harga: false,
      tahun: false,
      kilometer: false,
    };
  }

  handleChange = (event) => {
    this.setState({ ...this.state, [event.target.name]: event.target.checked });
  };

  render() {
    return (
      <Modal
        {...this.props}
        backdrop="static"
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter centered">
            <b>TETAPKAN PRIORITAS KONDISI MOBIL BEKAS</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form align-content-center">
            <div className="row">
              <div className="col-12">
                <p className="label-txt">KRITERIA UTAMA MOBIL :</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <FormControl component="fieldset" className="checkbox-group">
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={this.state.harga}
                          onChange={this.handleChange}
                          name="harga"
                        />
                      }
                      label="HARGA"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={this.state.tahun}
                          onChange={this.handleChange}
                          name="tahun"
                        />
                      }
                      label="TAHUN KELUARAN"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={this.state.kilometer}
                          onChange={this.handleChange}
                          name="kilometer"
                        />
                      }
                      label="KILOMETER"
                    />
                  </FormGroup>
                </FormControl>
              </div>
            </div>
            <br></br>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">
            <b>SELESAI</b>
          </Button>
          <Button variant="danger" onClick={() => this.props.onHide()}>
            <b>BATAL</b>
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ModalPrioritas2;
