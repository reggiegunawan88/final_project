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
      obj_data: [
        {
          data: "HARGA",
          value: 0,
        },
        {
          data: "TAHUN KELUARAN",
          value: 0,
        },
        {
          data: "KILOMETER",
          value: 0,
        },
      ],
    };
  }

  goto_finalModal = () => {
    var formIsValid = false;
    var ct = 0;

    this.state.obj_data.forEach((item) => {
      if (item.value !== 0) {
        ct += 1;
      }
    });

    //check if all three priority number is filled
    ct === 3 ? (formIsValid = true) : (formIsValid = false);

    if (formIsValid) {
      this.props.onReceivedProps(); //close current modal
      this.props.onSendDataObj(this.state.obj_data); //send state data
      this.setState({
        obj_data: [
          {
            data: "HARGA",
            value: 0,
          },
          {
            data: "TAHUN KELUARAN",
            value: 0,
          },
          {
            data: "KILOMETER",
            value: 0,
          },
        ],
      });
    } else {
      alert("Ada nilai prioritas yang belum diisi");
    }
  };

  update_dropdownValue(index, selected_value) {
    let new_state = [...this.state.obj_data];
    new_state[index] = { ...new_state[index], value: selected_value };
    this.setState({ obj_data: new_state });
  }

  //* method for getting value of each dropdown
  get_priority_harga = (event) => {
    const index = 0;
    const value = parseInt(event.target.textContent, 10);
    this.update_dropdownValue(index, value);
  };

  get_priority_tahun = (event) => {
    const index = 1;
    const value = parseInt(event.target.textContent, 10);
    this.update_dropdownValue(index, value);
  };

  get_priority_kilometer = (event) => {
    const index = 2;
    const value = parseInt(event.target.textContent, 10);
    this.update_dropdownValue(index, value);
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
                  <div className="note-txt">
                    *Anda dapat memilih angka prioritas yang sama antar kriteria
                  </div>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-6 col-checkbox">
                <FormControl component="fieldset" className="checkbox-group">
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox checked={true} value="HARGA" disabled />
                      }
                      label="HARGA"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={true}
                          value="TAHUN KELUARAN"
                          disabled
                        />
                      }
                      label="TAHUN KELUARAN"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox checked={true} value="KILOMETER" disabled />
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
                    onChange={this.get_priority_harga}
                  />
                </div>
                <div className="dropdown-tahun">
                  <Dropdown
                    placeholder="---Pilih---"
                    options={this.state.dropdown_value}
                    onChange={this.get_priority_tahun}
                  />
                </div>
                <div className="dropdown-kilometer">
                  <Dropdown
                    placeholder="---Pilih---"
                    options={this.state.dropdown_value}
                    onChange={this.get_priority_kilometer}
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
