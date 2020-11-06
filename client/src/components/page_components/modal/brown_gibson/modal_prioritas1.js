import React from "react";
import "./../../../style/modal_prioritas1.css";
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
      jenis_rem: false,
      jenis_bb: false,
      airbag: false,
      gps: false,
      smart_key: false,
      power_steering: false,
      dropdown_value: [],

      //this state wil be send to the next modal
      subj_data: [],
    };
    this.choice = 0;
  }

  //* increment state by 1 if one of the checkbox is selected
  handleChange = (event) => {
    event.preventDefault();
    this.setState({
      ...this.state,
      [event.target.value]: event.target.checked,
    });
    if (event.target.checked) {
      this.choice++;
      this.add_CheckboxData(event.target.name);
      this.set_DropdownValue(this.choice);
    } else {
      this.choice--;
      this.remove_CheckboxData(event.target.name);
      this.set_DropdownValue(this.choice);
    }
  };

  resetState = () => {
    this.choice = 0;
    this.setState({
      jenis_rem: false,
      jenis_bb: false,
      airbag: false,
      gps: false,
      smart_key: false,
      power_steering: false,
      dropdown_value: [],
      subj_data: [],
    });
  };

  //* submit btn click
  nextModal = () => {
    if (this.choice < 3) {
      alert("Pilihan masih dibawah 3");
    } else {
      this.resetState();
      this.props.onReceivedProps();
      this.props.onSendDataSubj(this.state.subj_data);
    }
  };

  set_DropdownValue(choice) {
    let arr = [];
    for (let i = 1; i <= choice; i++) {
      arr.push({ key: i, text: "" + i, value: i });
    }
    this.setState({ dropdown_value: arr });
  }

  add_CheckboxData(name) {
    let temp_arr = [...this.state.subj_data]; //temp array
    temp_arr.push({ data: name, value: 0 });
    this.setState({ subj_data: temp_arr });
  }

  remove_CheckboxData(name) {
    let temp_arr = [...this.state.subj_data]; //copy arr from state
    let result = temp_arr.filter((item) => item.data !== name);
    this.setState({ subj_data: result });
  }

  update_dropdown_value(checkbox_name, selected_value) {
    const index = this.state.subj_data.findIndex(
      (item) => item.data === checkbox_name
    );
    let new_state = [...this.state.subj_data];
    new_state[index] = { ...new_state[index], value: selected_value };
    this.setState({ subj_data: new_state });
  }

  //* method below for get each dropdown (rank) value
  get_value_jenisrem = (event) => {
    const selected_value = parseInt(event.target.textContent, 10);
    this.update_dropdown_value("JENIS REM", selected_value);
  };

  get_value_jenisbahanbakar = (event) => {
    const selected_value = parseInt(event.target.textContent, 10);
    this.update_dropdown_value("JENIS BAHAN BAKAR", selected_value);
  };

  get_value_airbag = (event) => {
    const selected_value = parseInt(event.target.textContent, 10);
    this.update_dropdown_value("AIRBAG", selected_value);
  };

  get_value_gps = (event) => {
    const selected_value = parseInt(event.target.textContent, 10);
    this.update_dropdown_value("GPS", selected_value);
  };

  get_value_smartkey = (event) => {
    const selected_value = parseInt(event.target.textContent, 10);
    this.update_dropdown_value("SMART KEY", selected_value);
  };

  get_value_powersteering = (event) => {
    const selected_value = parseInt(event.target.textContent, 10);
    this.update_dropdown_value("POWER STEERING", selected_value);
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
                  Pilih Minimal 3 <br /> Kondisi yang dipilih akan menjadi
                  faktor subjektif sebuah mobil bekas
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
                              name="JENIS REM"
                              value="jenis_rem"
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
                              name="JENIS BAHAN BAKAR"
                              value="jenis_bb"
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
                              name="AIRBAG"
                              value="airbag"
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
                              name="GPS"
                              value="gps"
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
                              name="SMART KEY"
                              value="smart_key"
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
                              name="POWER STEERING"
                              value="power_steering"
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
              <div className="col-4">
                <div
                  className="dropdown-rem"
                  style={{
                    visibility: this.state.jenis_rem ? "visible" : "hidden",
                  }}
                >
                  <Dropdown
                    placeholder="---Pilih---"
                    options={this.state.dropdown_value}
                    onChange={this.get_value_jenisrem}
                  />
                </div>
                <div
                  className="dropdown-bahanbakar"
                  style={{
                    visibility: this.state.jenis_bb ? "visible" : "hidden",
                  }}
                >
                  <Dropdown
                    placeholder="---Pilih---"
                    options={this.state.dropdown_value}
                    onChange={this.get_value_jenisbahanbakar}
                  />
                </div>
                <div
                  className="dropdown-airbag"
                  style={{
                    visibility: this.state.airbag ? "visible" : "hidden",
                  }}
                >
                  <Dropdown
                    placeholder="---Pilih---"
                    options={this.state.dropdown_value}
                    onChange={this.get_value_airbag}
                  />
                </div>
                <div
                  className="dropdown-gps"
                  style={{
                    visibility: this.state.gps ? "visible" : "hidden",
                  }}
                >
                  <Dropdown
                    placeholder="---Pilih---"
                    options={this.state.dropdown_value}
                    onChange={this.get_value_gps}
                  />
                </div>
                <div
                  className="dropdown-smartkey"
                  style={{
                    visibility: this.state.smart_key ? "visible" : "hidden",
                  }}
                >
                  <Dropdown
                    placeholder="---Pilih---"
                    options={this.state.dropdown_value}
                    onChange={this.get_value_smartkey}
                  />
                </div>
                <div
                  className="dropdown-ps"
                  style={{
                    visibility: this.state.power_steering
                      ? "visible"
                      : "hidden",
                  }}
                >
                  <Dropdown
                    placeholder="---Pilih---"
                    options={this.state.dropdown_value}
                    onChange={this.get_value_powersteering}
                  />
                </div>
              </div>
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
