import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import "./../../../style/modal_bobot.css";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Checkbox from "@material-ui/core/Checkbox";
import Select from "@material-ui/core/Select";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline"; //for icon
import { Popup } from "semantic-ui-react"; //for tooltip

//brown-gibson algorithm
import calculate_LPM from "./../../../function/brown-gibson";

export class modal_bobot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secc_data: this.props.getSECCData,
      subj_data: this.props.onReceivedSubjData,
      obj_data: this.props.onReceivedObjData,
      weight: [
        {
          text: "10%",
          value: 0.1,
        },
        {
          text: "20%",
          value: 0.2,
        },
        {
          text: "30%",
          value: 0.3,
        },
        {
          text: "40%",
          value: 0.4,
        },
        {
          text: "50%",
          value: 0.5,
        },
        {
          text: "60%",
          value: 0.6,
        },
        {
          text: "70%",
          value: 0.7,
        },
        {
          text: "80%",
          value: 0.8,
        },
        {
          text: "90%",
          value: 0.9,
        },
      ],
      text_weight_obj: "",
      text_weight_subj: "",
      obj_weight: 0,
      subj_weight: 0,
    };
  }

  componentDidUpdate() {
    let props_secc_data = this.props.getSECCData;
    let props_obj = this.props.onReceivedObjData;
    let props_subj = this.props.onReceivedSubjData;
    if (
      props_secc_data !== this.state.secc_data ||
      props_obj !== this.state.obj_data ||
      props_subj !== this.state.subj_data
    ) {
      //sort by rank first
      let result_obj = this.sort_by_ranking(props_obj);
      let result_subj = this.sort_by_ranking(props_subj);
      this.setState({
        secc_data: this.props.getSECCData,
        obj_data: result_obj,
        subj_data: result_subj,
      });
    }
  }

  sort_by_ranking(data) {
    let result = data.sort((a, b) => (a.value > b.value ? 1 : -1));
    return result;
  }

  handle_change_bobot = (event) => {
    event.preventDefault();
    const obj_weight_value = event.target.value; //get value directly from event
    const obj_percent = (obj_weight_value * 100).toString() + "%"; //convert to string percent
    const subj_percent = (100 - obj_weight_value * 100).toString() + "%"; //sum and convert to string percent
    const subj_weight_value = Math.round((1 - obj_weight_value) * 10) / 10; //result for subj weight
    this.setState(
      {
        obj_weight: obj_weight_value,
        subj_weight: subj_weight_value,
        text_weight_obj: obj_percent,
        text_weight_subj: subj_percent,
      },
      () => console.log(this.state)
    );
  };

  //* render value inside select box
  renderValue = (value) => {
    return value;
  };

  submit_all_data = () => {
    let result = calculate_LPM(
      this.state.secc_data,
      this.state.obj_data,
      this.state.subj_data,
      this.state.obj_weight,
      this.state.subj_weight
    );
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
            <b>TETAPKAN BOBOT</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form align-content-center">
            <div className="row">
              <div className="col-12">
                <p className="label-txt">Menetapkan perbandingan bobot</p>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <div className="wrapper-text-icon">
                  <p className="label-txt">Faktor Objektif</p>
                  <Popup
                    trigger={
                      <HelpOutlineIcon
                        id="HelpIcon"
                        fontSize="medium"
                        color="primary"
                      />
                    }
                    position="bottom right"
                  >
                    Kriteria pada faktor ini merupakan kriteria utama mobil
                    bekas yang sudah ditentukan oleh sistem yang ada pada slide
                    kedua
                  </Popup>
                </div>
                <FormControl component="fieldset" className="checkbox-group">
                  <FormGroup>
                    {this.state.obj_data.map((item) => (
                      <FormControlLabel
                        control={
                          <Checkbox checked={true} name={item.data} disabled />
                        }
                        label={item.data + " -> " + "(" + item.value + ")"}
                      />
                    ))}
                  </FormGroup>
                </FormControl>
              </div>
              <div className="col-4">
                <div className="wrapper-text-icon">
                  <p className="label-txt">Pembobotan</p>
                  <Popup
                    trigger={
                      <HelpOutlineIcon
                        id="HelpIcon"
                        fontSize="medium"
                        color="primary"
                      />
                    }
                    position="bottom center"
                  >
                    Anda menentukan apakah kriteria objektif akan memiliki bobot
                    lebih besar (lebih penting) daripada kriteria subjektif dan
                    sebaliknya
                  </Popup>
                </div>
                <div className="select-bobot-container">
                  <div className="row" style={{ marginTop: "10%" }}>
                    <div className="col-6">
                      <FormControl variant="outlined" style={{ minWidth: 100 }}>
                        <InputLabel id="demo-simple-select-outlined-label">
                          Objektif
                        </InputLabel>
                        <Select
                          autoWidth
                          value={this.state.text_weight_obj}
                          renderValue={() =>
                            this.renderValue(this.state.text_weight_obj)
                          }
                          onChange={this.handle_change_bobot}
                          label="bobot_obj"
                        >
                          {this.state.weight.map((item) => (
                            <MenuItem
                              style={{ width: "fit-content" }}
                              value={item.value}
                            >
                              {item.text}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </div>
                    <div className="col-6">
                      <FormControl variant="outlined" className="bobot-select">
                        <InputLabel id="demo-simple-select-outlined-label">
                          Subjektif
                        </InputLabel>
                        <Select
                          value={this.state.text_weight_subj}
                          renderValue={() =>
                            this.renderValue(this.state.text_weight_subj)
                          }
                          label="bobot_subj"
                          autoWidth
                          disabled
                        >
                          {this.state.weight.map((item) => (
                            <MenuItem
                              style={{ width: "fit-content" }}
                              value={item.value}
                            >
                              {item.text}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="wrapper-text-icon">
                  <p className="label-txt">Faktor Subjektif</p>
                  <Popup
                    trigger={
                      <HelpOutlineIcon
                        id="HelpIcon"
                        fontSize="medium"
                        color="primary"
                      />
                    }
                    position="bottom left"
                  >
                    Kriteria pada faktor ini merupakan semua kriteria yang Anda
                    pilih sebelumnya di slide pertama
                  </Popup>
                </div>
                <FormControl component="fieldset" className="checkbox-group">
                  <FormGroup>
                    {this.state.subj_data.map((item) => (
                      <FormControlLabel
                        control={
                          <Checkbox checked={true} name={item.data} disabled />
                        }
                        label={item.data + " -> " + "(" + item.value + ")"}
                      />
                    ))}
                  </FormGroup>
                </FormControl>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={this.submit_all_data}>
            <b>SELESAI</b>
          </Button>
          <Button variant="danger" onClick={this.props.onHide}>
            <b>BATAL</b>
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default modal_bobot;
