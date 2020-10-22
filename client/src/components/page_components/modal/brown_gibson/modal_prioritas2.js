import React from "react";
import "./../../../style/modal_prioritas2.css";
import { Button, Modal } from "react-bootstrap";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Dropdown from "./../../dropdown/dropdown";

class ModalPrioritas2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      harga: false,
      tahun: false,
      kilometer: false,
      dropdown_value: [
        {
          key: 1,
          text: "1",
          value: 1,
        },
        {
          key: 2,
          text: "2",
          value: 2,
        },
        {
          key: 3,
          text: "3",
          value: 3,
        },
      ],
    };
  }

  handleChange = (event) => {
    this.setState({ ...this.state, [event.target.name]: event.target.checked });
  };

  goto_finalModal = () => {
    this.props.onReceivedProps();
  };

  //* method for getting value of each dropdown
  get_value_harga(event) {
    const value = parseInt(event.target.textContent, 10);
  }

  get_value_tahun(event) {
    const value = parseInt(event.target.textContent, 10);
  }

  get_value_kilometer(event) {
    const value = parseInt(event.target.textContent, 10);
  }

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
            <b>TETAPKAN PRIORITAS KRITERIA UTAMA MOBIL BEKAS</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form align-content-center">
            <div className="row">
              <div className="col-12">
                <p className="label-txt">
                  Kriteria yang dipilih akan menjadi faktor objektif sebuah
                  mobil bekas
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-6 col-checkbox">
                <FormControl component="fieldset" className="checkbox-group">
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={true}
                          onChange={this.handleChange}
                          name="harga"
                          disabled
                        />
                      }
                      label="HARGA"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={true}
                          onChange={this.handleChange}
                          name="tahun"
                          disabled
                        />
                      }
                      label="TAHUN KELUARAN"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={true}
                          onChange={this.handleChange}
                          name="kilometer"
                          disabled
                        />
                      }
                      label="KILOMETER"
                    />
                  </FormGroup>
                </FormControl>
              </div>
              <div className="col-6 col-dropdown">
                <div className="dropdown-harga">
                  <Dropdown
                    placeholder="---Pilih---"
                    options={this.state.dropdown_value}
                    onChange={this.get_value_harga}
                  />
                </div>
                <div className="dropdown-tahun">
                  <Dropdown
                    placeholder="---Pilih---"
                    options={this.state.dropdown_value}
                    onChange={this.get_value_tahun}
                  />
                </div>
                <div className="dropdown-kilometer">
                  <Dropdown
                    placeholder="---Pilih---"
                    options={this.state.dropdown_value}
                    onChange={this.get_value_kilometer}
                  />
                </div>
              </div>
            </div>
            <br></br>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.goto_finalModal}>
            <b>SELANJUTNYA</b>
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
