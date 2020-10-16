import React from "react";
import "../../../style/modal_subjektif.css";
import { Button, Modal } from "react-bootstrap";
import { Dropdown } from "semantic-ui-react";
import ModalPrioritas from "./modal_prioritas";

class ModalKondisi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      criteria_choosed: 0,
      km1: null,
      km2: null,
      options_km: [
        {
          key: "ALL",
          text: "---SEMUA---",
          value: "ALL",
        },
        {
          text: "0 - 10.000",
          value: "0,10000",
        },
        {
          text: "10.000 - 20.000",
          value: "10000,20000",
        },
        {
          text: "20.000 - 30.000",
          value: "20000,30000",
        },
        {
          text: "30.000 - 40.000",
          value: "30000,40000",
        },
      ],
    };
  }

  componentDidMount() {
    console.log(this.props);
  }

  onChangeRadio = (event) => {
    this.setState({
      valueCheckbox: event.target.value,
      criteria_choosed: this.state.criteria_choosed + 1,
    });
  };

  get_dropdown_km = (event) => {
    const value = event.target.textContent;
    const value_split = value.split(" - ");
    this.setState({ km1: value_split[0], km2: value_split[1] });
    // console.log(event.target.textContent);
    // console.log(event.target.value);
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
            <b>PILIH KONDISI MOBIL BEKAS</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form align-content-center">
            <div className="row">
              <div className="col-12">
                <p id="label-txt">JUMLAH KILOMETER: </p>
                <div className="centered">
                  <Dropdown
                    id="kriteria-km"
                    className="dropdown"
                    placeholder="--Semua--"
                    fluid
                    selection
                    onChange={this.get_dropdown_km}
                    options={this.state.options_km}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <p id="label-txt">
                  FITUR MOBIL <br></br> (Pilih Minimal 3 Kriteria)
                </p>
              </div>
            </div>
            <br></br>
            <div className="row">
              <div className="col-4">
                <p id="label-txt">JENIS TRANSMISI :</p>
                <div className="centered">
                  <label>
                    <input
                      type="radio"
                      name="radiobtn-transmisi"
                      value="AUTOMATIC"
                      onChange={this.onChangeRadio}
                    />
                    AUTOMATIC
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="radiobtn-transmisi"
                      value="MANUAL"
                      onChange={this.onChangeRadio}
                    />
                    MANUAL
                  </label>
                </div>
              </div>
              <div className="col-4">
                <p id="label-txt">JENIS BAHAN BAKAR :</p>
                <div className="centered">
                  <label>
                    <input
                      type="radio"
                      name="radiobtn-bahanbakar"
                      value="BENSIN"
                      onChange={this.onChangeRadio}
                    />
                    BENSIN
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="radiobtn-bahanbakar"
                      value="DIESEL"
                      onChange={this.onChangeRadio}
                    />
                    DIESEL
                  </label>
                </div>
              </div>
              <div className="col-4">
                <p id="label-txt">JENIS REM :</p>
                <div className="centered">
                  <label>
                    <input
                      type="radio"
                      name="radiobtn-rem"
                      value="ABS"
                      onChange={this.onChangeRadio}
                    />
                    ABS
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="radiobtn-rem"
                      value="NON-ABS"
                      onChange={this.onChangeRadio}
                    />
                    NON-ABS
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <p id="label-txt">GPS :</p>
                <div className="centered">
                  <label>
                    <input
                      type="radio"
                      name="radiobtn-gps"
                      value="YA"
                      onChange={this.onChangeRadio}
                    />
                    YA
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="radiobtn-gps"
                      value="TIDAK"
                      onChange={this.onChangeRadio}
                    />
                    TIDAK
                  </label>
                </div>
              </div>
              <div className="col-4">
                <p id="label-txt">SMART KEY :</p>
                <div className="centered">
                  <label>
                    <input
                      type="radio"
                      name="radiobtn-smartkey"
                      value="YA"
                      onChange={this.onChangeRadio}
                    />
                    YA
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="radiobtn-smartkey"
                      value="TIDAK"
                      onChange={this.onChangeRadio}
                    />
                    TIDAK
                  </label>
                </div>
              </div>
              <div className="col-4">
                <p id="label-txt">AIRBAG :</p>
                <div className="centered">
                  <label>
                    <input
                      type="radio"
                      name="radiobtn-airbag"
                      value="YA"
                      onChange={this.onChangeRadio}
                    />
                    YA
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="radiobtn-airbag"
                      value="TIDAK"
                      onChange={this.onChangeRadio}
                    />
                    TIDAK
                  </label>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">SELANJUTNYA</Button>
          <Button variant="danger" onClick={this.props.onHide}>
            BATAL
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ModalKondisi;
