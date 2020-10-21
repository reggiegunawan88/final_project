import React from "react";
import "./../../../style/modal_prioritas1.css";
import ModalPrioritas2 from "./modal_prioritas1_s";
import { Button, Modal } from "react-bootstrap";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Dropdown from "../../dropdown/dropdown";
import { Popup } from "semantic-ui-react"; //for tooltip

class ModalPrioritas1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choice: 0,

      //attribute
      jenis_rem: false,
      jenis_bb: false,
      airbag: false,
      gps: false,
      smart_key: false,
      power_steering: false,
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

  //* increment state by 1 if one of the checkbox is selected
  handleChange = (event) => {
    if (event.target.checked) {
      this.setState({ choice: this.state.choice++ });
    } else {
      this.setState({ choice: this.state.choice-- });
    }
    this.setState({ ...this.state, [event.target.name]: event.target.checked });
  };

  nextModal = () => {
    if (this.state.choice < 3) {
      alert("Pilihan masih dibawah 3");
    } else {
      this.props.onReceivedProps();
    }
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
            <b>TETAPKAN PRIORITAS KONDISI MOBIL BEKAS</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form align-content-center">
            <div className="row">
              <div className="col-12">
                <p className="label-txt">
                  KONDISI MOBIL <br /> (Pilih Minimal 3 Kriteria)
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-8 col-checkbox">
                <FormControl component="fieldset" className="checkbox-group">
                  <FormGroup>
                    <Popup
                      trigger={
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={this.state.jenis_rem}
                              onChange={this.handleChange}
                              name="jenis_rem"
                            />
                          }
                          label="JENIS REM"
                        />
                      }
                      position="left center"
                    >
                      Ada 2 jenis rem : <br /> ABS dan Non ABS
                    </Popup>

                    <Popup
                      trigger={
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={this.state.jenis_bb}
                              onChange={this.handleChange}
                              name="jenis_bb"
                            />
                          }
                          label="JENIS BAHAN BAKAR"
                        />
                      }
                      position="left center"
                    >
                      Ada 2 jenis bahan bakar: <br /> Bensin dan Diesel
                    </Popup>
                    <Popup
                      trigger={
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={this.state.airbag}
                              onChange={this.handleChange}
                              name="airbag"
                            />
                          }
                          label="AIRBAG"
                        />
                      }
                      position="left center"
                    >
                      Airbag akan mengembang untuk melindungi anda jika
                      mendeteksi tabrakan keras terjadi
                    </Popup>
                    <Popup
                      trigger={
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={this.state.gps}
                              onChange={this.handleChange}
                              name="gps"
                            />
                          }
                          label="GPS"
                        />
                      }
                      position="left center"
                    >
                      GPS berfungsi sebagai sistem navigasi dan mengetahui
                      keberadaan lokasi mobil anda
                    </Popup>

                    <Popup
                      trigger={
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={this.state.smart_key}
                              onChange={this.handleChange}
                              name="smart_key"
                            />
                          }
                          label="SMART KEY"
                        />
                      }
                      position="left center"
                    >
                      Dengan Smart Key, anda dapat membuka pintu mobil dan
                      menyalakan mesin mobil tanpa kunci
                    </Popup>

                    <Popup
                      trigger={
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={this.state.power_steering}
                              onChange={this.handleChange}
                              name="power_steering"
                            />
                          }
                          label="POWER STEERING"
                        />
                      }
                      position="left center"
                    >
                      Power Steering berfungsi untuk meringankan putaran kemudi
                      agar setir mobil dapat digunakan lebih mudah
                    </Popup>
                  </FormGroup>
                </FormControl>
              </div>
              {/* <div className="col-4">
                <Dropdown
                  id="dropdown-jenisrem"
                  placeholder="Pilih prioritas.."
                  options={this.state.dropdown_value}
                />
                <Dropdown
                  placeholder="Pilih prioritas.."
                  options={this.state.dropdown_value}
                />
                <Dropdown
                  placeholder="Pilih prioritas.."
                  options={this.state.dropdown_value}
                />
              </div> */}
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.nextModal}>
            <b>SELANJUTNYA</b>
          </Button>
          <Button variant="danger" onClick={this.props.onHide}>
            <b>BATAL</b>
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ModalPrioritas1;
