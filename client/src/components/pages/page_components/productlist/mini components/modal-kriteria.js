import React from "react";
import "../../../../style/modal.css";
import { Alert, Button, Modal } from "react-bootstrap";
import { Confirm, Dropdown } from "semantic-ui-react";
import axios from "axios";

class ModalKriteria extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list_merk_mobil: [],
      list_tipe_mobil: [],
      merk_mobil: null,
      tipe_mobil: null,
      harga_1: null,
      harga_2: null,
      tahun_1: null,
      tahun_2: null,
    };
  }

  async componentDidMount() {
    this.get_data();
  }

  async get_data() {
    try {
      const res_merk = await axios("http://localhost:5000/mobil/merkmobil");
      const res_tipe = await axios("http://localhost:5000/mobil/tipemobil");
      this.setState({ list_merk_mobil: this.parse_merkmobil(res_merk.data) });
      this.setState({ list_tipe_mobil: this.parse_tipemobil(res_tipe.data) });
    } catch (error) {}
  }

  //parsing raw data into [key, value] obj from JSON
  //parse merk_mobil
  parse_merkmobil(datas) {
    return datas.map((data) => {
      return { key: data.merk, text: data.merk, value: data.merk };
    });
  }

  //parse tipe_mobil
  parse_tipemobil(datas) {
    return datas.map((data) => {
      return {
        key: data.tipe_mobil,
        text: data.tipe_mobil,
        value: data.tipe_mobil,
      };
    });
  }

  //get radio btn selected data
  onChangeRadio = (event) => {
    const value = event.target.name;
    if (value === "radiobtn-harga") {
      var string = event.target.value.split(",");
      this.setState({ harga_1: string[0], harga_2: string[1] });
    } else {
      var string = event.target.value.split(",");
      this.setState({ tahun_1: string[0], tahun_2: string[1] });
    }
  };

  //get dropdown data for merk_mobil
  get_dropdown_merkmobil = (event) => {
    const value = event.target.textContent;
    this.setState({ merk_mobil: value });
  };

  //get dropdown data for tipe_mobil
  get_dropdown_tipemobil = (event) => {
    const value = event.target.textContent;
    this.setState({ tipe_mobil: value });
  };

  //submit data into query
  post_data = async (e) => {
    e.preventDefault();
    var filter_data = {
      merk_mobil: this.state.merk_mobil,
      tipe_mobil: this.state.tipe_mobil,
      harga_1: this.state.harga_1,
      harga_2: this.state.harga_2,
      tahun_1: this.state.tahun_1,
      tahun_2: this.state.tahun_2,
    };
    if (this.state.merk_mobil == null) {
      alert("Merk mobil belum dipilih");
    } else if (this.state.tipe_mobil == null) {
      alert("Tipe mobil belum dipilih");
    } else if (this.state.harga_1 == null && this.state.harga_2 == null) {
      alert("Rentang harga mobil belum dipilih");
    } else if (this.state.tahun_1 == null && this.state.tahun_2 == null) {
      alert("Rentang tahun keluaran mobil belum dipilih");
    } else {
      await axios
        .post("http://localhost:5000/mobil/post_result_SECC", filter_data, {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            accept: "application/json",
          },
        })
        .then((response) => {
          console.log(response);
          alert("Data berhasil dimasukkan!");
        })
        .catch(function (err) {
          console.log(err);
        });
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
            Pilih Kriteria Mobil Bekas yang Diinginkan
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form align-content-center">
              <div className="row">
                <div className="col-12 col-md-offset-6 ">
                  <p id="label-txt">MERK :</p>
                  <div>
                    <Dropdown
                      id="kriteria-merk"
                      className="dropdown"
                      placeholder="--Semua--"
                      fluid
                      selection
                      onChange={this.get_dropdown_merkmobil}
                      options={this.state.list_merk_mobil}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <p id="label-txt">TIPE MOBIL : </p>
                  <div>
                    <Dropdown
                      name="dropdown_merk"
                      id="kriteria-merk"
                      placeholder="--Semua--"
                      fluid
                      selection
                      onChange={this.get_dropdown_tipemobil}
                      options={this.state.list_tipe_mobil}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <p id="label-txt">HARGA : </p>
                  <div className="centered">
                    <label className="radio-btn-group">
                      <input
                        type="radio"
                        value="50000000,100000000"
                        name="radiobtn-harga"
                        onChange={this.onChangeRadio}
                      />
                      50 - 100 juta
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="101000000,200000000"
                        name="radiobtn-harga"
                        onChange={this.onChangeRadio}
                      />
                      101 - 200 juta
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="201000000,300000000"
                        name="radiobtn-harga"
                        onChange={this.onChangeRadio}
                      />
                      201 - 300 juta
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="301000000,400000000"
                        name="radiobtn-harga"
                        onChange={this.onChangeRadio}
                      />
                      301 - 400 juta
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <p id="label-txt">TAHUN KELUARAN :</p>
                  <div className="centered">
                    <label className="radio-btn-tahun">
                      <input
                        type="radio"
                        value="2005,2010"
                        name="radionbtn-tahun"
                        onChange={this.onChangeRadio}
                      />
                      2005 - 2010
                    </label>
                    <label className="radio-btn-tahun">
                      <input
                        type="radio"
                        value="2011,2015"
                        name="radionbtn-tahun"
                        onChange={this.onChangeRadio}
                      />
                      2011 - 2015
                    </label>
                    <label className="radio-btn-tahun">
                      <input
                        type="radio"
                        value="2016,2020"
                        name="radionbtn-tahun"
                        onChange={this.onChangeRadio}
                      />
                      2016 - 2020
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.post_data}>
            CARI MOBIL
          </Button>
          <Button variant="danger" onClick={this.props.onHide}>
            BATAL
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ModalKriteria;
