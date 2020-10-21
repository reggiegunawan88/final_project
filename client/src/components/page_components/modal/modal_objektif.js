import React from "react";
import "./../../style/modal_objektif.css";
import { Alert, Button, Modal } from "react-bootstrap";
import Dropdown from "./../dropdown/dropdown";
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
      options_tahun: [
        {
          key: "ALL",
          text: "===SEMUA===",
          value: "ALL",
        },
        {
          key: "1",
          text: "2005 - 2010",
          value: "2005,2010",
        },
        {
          key: "2",
          text: "2011 - 2015",
          value: "2011,2015",
        },
        {
          key: "3",
          text: "2016 - 2020",
          value: "2016,2020",
        },
      ],
      options_harga: [
        {
          key: "ALL",
          text: "===SEMUA===",
          value: "ALL",
        },
        {
          key: "1",
          text: "50 juta - 100 juta",
          value: "50000000,100000000",
        },
        {
          key: "2",
          text: "100 juta - 200 juta",
          value: "100000000,200000000",
        },
        {
          key: "3",
          text: "200 juta - 300 juta",
          value: "200000000,300000000",
        },
        {
          key: "4",
          text: "300 juta - 400 juta",
          value: "300000000,400000000",
        },
        {
          key: "5",
          text: "400 juta - 500 juta",
          value: "400000000,500000000",
        },
        {
          key: "6",
          text: "> 500 juta",
          value: "500000000,5000000000",
        },
      ],
      options_km: [
        {
          key: "ALL",
          text: "===SEMUA===",
          value: "ALL",
        },
        {
          key: "1",
          text: "0 - 10.000",
          value: "0,10000",
        },
        {
          key: "2",
          text: "10.000 - 20.000",
          value: "10000,20000",
        },
        {
          key: "3",

          text: "20.000 - 30.000",
          value: "20000,30000",
        },
        {
          key: "4",
          text: "30.000 - 40.000",
          value: "30000,40000",
        },
      ],
    };
  }

  async componentDidMount() {
    this.get_data();
  }

  //fetch data from server
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
    value.includes("===SEMUA===")
      ? this.setState({ merk_mobil: `all` })
      : this.setState({ merk_mobil: value });
  };

  //get dropdown data for tipe_mobil
  get_dropdown_tipemobil = (event) => {
    const value = event.target.textContent;
    value.includes("===SEMUA===")
      ? this.setState({ tipe_mobil: `all` })
      : this.setState({ tipe_mobil: value });
  };

  get_dropdown_harga = (event, data) => {
    const toString = data.value.split(",");
    data.value.includes("ALL")
      ? this.setState({ harga_1: 0, harga_2: 999999999999 })
      : this.setState({ harga_1: toString[0], harga_2: toString[1] });
  };

  // get_dropdown_km = (event, data) => {
  //   const toString = data.value.split(",");
  //   data.value.includes("ALL")
  //     ? this.setState({ km1: 0, km2: 9999999 })
  //     : this.setState({ km1: toString[0], km2: toString[1] });
  // };

  get_dropdown_tahun = (event, data) => {
    const toString = data.value.split(",");
    data.value.includes("ALL")
      ? this.setState({ tahun_1: 0, tahun_2: 2030 })
      : this.setState({ tahun_1: toString[0], tahun_2: toString[1] });
  };

  //submit data into query process
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
    var SECC_postprocessed = {
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
        .post("http://localhost:5000/mobil/result_SECC", filter_data, {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            accept: "application/json",
          },
        })
        .then((response) => {
          console.log(response.data);
          //send query result to mainpage
          this.props.onHide();
          this.props.onReceiveProps(response.data, SECC_postprocessed);
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
            <b>PILIH KRITERIA MOBIL BEKAS</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form align-content-center">
              <div className="row">
                <div className="col-12 col-md-offset-6 ">
                  <p id="label-txt">MERK :</p>
                  <div className="dropdown-component">
                    <Dropdown
                      placeholder="---Semua---"
                      onChange={this.get_dropdown_merkmobil}
                      options={this.state.list_merk_mobil}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <p id="label-txt">TIPE MOBIL : </p>
                  <div className="dropdown-component">
                    <Dropdown
                      placeholder="---Semua---"
                      onChange={this.get_dropdown_tipemobil}
                      options={this.state.list_tipe_mobil}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <p id="label-txt">HARGA : </p>
                  <div className="dropdown-component">
                    <Dropdown
                      placeholder="---Semua---"
                      onChange={this.get_dropdown_harga}
                      options={this.state.options_harga}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <p id="label-txt">TAHUN KELUARAN :</p>
                  <div className="dropdown-component">
                    <Dropdown
                      placeholder="---Semua---"
                      onChange={this.get_dropdown_tahun}
                      options={this.state.options_tahun}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <p id="label-txt">KILOMETER :</p>
                  <div className="dropdown-component">
                    <Dropdown
                      placeholder="---Semua---"
                      onChange={this.get_dropdown_km}
                      options={this.state.options_km}
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.post_data}>
            <b>CARI MOBIL</b>
          </Button>
          <Button variant="danger" onClick={this.props.onHide}>
            <b>BATAL</b>
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ModalKriteria;
