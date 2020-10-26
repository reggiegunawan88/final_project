import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import "./../../../style/modal_bobot.css";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Dropdown from "./../../dropdown/dropdown";

export class modal_bobot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subj_data: this.props.onReceivedSubjData,
      obj_data: this.props.onReceivedObjData,
      weight_obj: 0,
      weight_subj: 0,
    };
  }

  componentDidUpdate() {
    let props_obj = this.props.onReceivedObjData;
    let props_subj = this.props.onReceivedSubjData;
    if (
      props_obj !== this.state.obj_data ||
      props_subj !== this.state.subj_data
    ) {
      console.log("state updated");
      this.setState({
        obj_data: this.props.onReceivedObjData,
        subj_data: this.props.onReceivedSubjData,
      });
    }
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
            <b>TETAPKAN BOBOT ANTARA FAKTOR OBJEKTIF DAN SUBJEKTIF</b>
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
                <p className="label-txt">Faktor Objektif</p>
                <FormControl component="fieldset" className="checkbox-group">
                  <FormGroup>
                    {this.state.obj_data.map((item) => (
                      <FormControlLabel
                        control={
                          <Checkbox checked={true} name={item.data} disabled />
                        }
                        label={item.data}
                      />
                    ))}
                  </FormGroup>
                </FormControl>
              </div>
              <div className="col-4">
                <p className="label-txt">Pembobotan</p>
              </div>
              <div className="col-4">
                <p className="label-txt">Faktor Subjektif</p>
                <FormControl component="fieldset" className="checkbox-group">
                  <FormGroup>
                    {this.state.subj_data.map((item) => (
                      <FormControlLabel
                        control={
                          <Checkbox checked={true} name={item.data} disabled />
                        }
                        label={item.data}
                      />
                    ))}
                  </FormGroup>
                </FormControl>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success">
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
