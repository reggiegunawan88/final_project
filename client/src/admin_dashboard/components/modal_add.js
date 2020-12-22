import React from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";
import axios from "axios";
import "./../style/modal.css";

class modal_add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list_merk_mobil: [],
      list_tipe_mobil: [],
      nama_mobil: null,
      harga: null,
      merk_mobil: null,
      tipe_mobil: null,
      km: null,
      tahun_keluaran: null,
      kapasitas_mesin: null,
      bahan_bakar: null,
      transmisi: null,
      jenis_rem: null,
      power_steering: null,
      gps: null,
      smart_key: null,
      airbag: null,
    };
  }

  componentDidMount() {
    this.get_data();
  }

  async get_data() {
    try {
      const res_merk = await axios("http://localhost:5000/mobil/merkmobil");
      const res_tipe = await axios("http://localhost:5000/mobil/tipemobil");
      this.setState({
        list_merk_mobil: this.parse_merkmobil(res_merk.data),
        list_tipe_mobil: this.parse_tipemobil(res_tipe.data),
      });
    } catch (error) {}
  }

  //parsing raw data into [key, value] obj from JSON
  //parse merk_mobil
  parse_merkmobil(datas) {
    return datas.map((data) => {
      return { key: data.idmerk, text: data.merk, value: data.idmerk };
    });
  }

  //parse tipe_mobil
  parse_tipemobil(datas) {
    return datas.map((data) => {
      return {
        key: data.idtipe,
        text: data.tipe_mobil,
        value: data.idtipe,
      };
    });
  }

  submit_data = () => {
    var item_data = {
      nama_mobil: this.state.nama_mobil,
      harga: this.state.harga,
      merk_mobil: this.state.merk_mobil,
      tipe_mobil: this.state.tipe_mobil,
      tahun_keluaran: this.state.tahun_keluaran,
      km: this.state.km,
      kapasitas_mesin: this.state.kapasitas_mesin,
      bahan_bakar: this.state.bahan_bakar,
      transmisi: this.state.transmisi,
      jenis_rem: this.state.jenis_rem,
      power_steering: this.state.power_steering,
      gps: this.state.gps,
      smart_key: this.state.smart_key,
      airbag: this.state.airbag,
    };

    //validation state
    if (this.state.nama_mobil == null) {
      alert("Nama mobil belum diisi");
    } else if (this.state.harga == null) {
      alert("Harga mobil belum diisi");
    } else if (this.state.merk_mobil == null) {
      alert("Merk mobil belum dipilih");
    } else if (this.state.tipe_mobil == null) {
      alert("Tipe mobil belum dipilih");
    } else if (this.state.tahun_keluaran == null) {
      alert("Tahun keluaran belum diisi");
    } else if (this.state.km == null) {
      alert("Jumlah kilometer belum diisi");
    } else if (this.state.kapasitas_mesin == null) {
      alert("Kapasitas mesin mobil belum diisi");
    } else if (this.state.bahan_bakar == null) {
      alert("Jenis bahan bakar belum dipilih");
    } else if (this.state.transmisi == null) {
      alert("Jenis transmisi belum dipilih");
    } else if (this.state.jenis_rem == null) {
      alert("Jenis rem belum dipilih");
    } else if (this.state.power_steering == null) {
      alert("Power steering belum dipilih");
    } else if (this.state.gps == null) {
      alert("GPS belum dipilih");
    } else if (this.state.smart_key == null) {
      alert("Smart key belum dipilih");
    } else if (this.state.airbag == null) {
      alert("Airbag belum dipilih");
    } else {
      //POST method
      axios
        .post("http://localhost:5000/admin/tambahmobil", item_data, {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            accept: "application/json",
          },
        })
        .then((response) => {
          alert("Mobil baru telah ditambahkan");
          window.location.reload();
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
        backdrop="static"
      >
        <Modal.Header>
          <Modal.Title id="">
            <b>TAMBAH MOBIL</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>
                  <b>Nama Mobil</b>
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Masukkan nama mobil..."
                  onChange={(event) =>
                    this.setState({
                      nama_mobil: event.target.value.toUpperCase(),
                    })
                  }
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>
                  <b>Harga</b>
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Masukkan harga mobil..."
                  onChange={(event) =>
                    this.setState({
                      harga: parseInt(event.target.value),
                    })
                  }
                />
              </Form.Group>
            </Form.Row>

            {/* merk & tipe mobil */}
            <Form.Row>
              <Form.Group as={Col} controlId="formPowerSteering">
                <Form.Label>
                  <b>Merk Mobil</b>
                </Form.Label>
                <Form.Control
                  as="select"
                  onChange={(event) =>
                    this.setState({ merk_mobil: event.target.value })
                  }
                >
                  <option>--PILIH--</option>
                  {this.state.list_merk_mobil.map((item) => (
                    <option value={item.value}>{item.text}</option>
                  ))}
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>
                  <b>Tipe Mobil</b>
                </Form.Label>
                <Form.Control
                  as="select"
                  onChange={(event) =>
                    this.setState({ tipe_mobil: event.target.value })
                  }
                >
                  <option>--PILIH--</option>
                  {this.state.list_tipe_mobil.map((item) => (
                    <option value={item.value}>{item.text}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Form.Row>

            {/* tahun, kilometer, kapasitas_mesin */}
            <Form.Row>
              <Form.Group as={Col} controlId="formPowerSteering">
                <Form.Label>
                  <b>Tahun Keluaran</b>
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Masukkan tahun keluaran..."
                  onChange={(event) =>
                    this.setState({
                      tahun_keluaran: parseInt(event.target.value),
                    })
                  }
                ></Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>
                  <b>Jumlah Kilometer</b>
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Masukkan jumlah kilometer..."
                  onChange={(event) =>
                    this.setState({
                      km: parseInt(event.target.value),
                    })
                  }
                ></Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>
                  <b>Kapasitas Mesin</b>
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Masukkan kapasitas mesin..."
                  onChange={(event) =>
                    this.setState({
                      kapasitas_mesin: parseInt(event.target.value),
                    })
                  }
                ></Form.Control>
              </Form.Group>
            </Form.Row>

            {/* bahan_bakar, transmisi, and jenis_rem */}
            <Form.Row>
              <Form.Group as={Col} controlId="formPowerSteering">
                <Form.Label>
                  <b>Bahan Bakar</b>
                </Form.Label>
                <Form.Control
                  as="select"
                  onChange={(event) =>
                    this.setState({ bahan_bakar: event.target.value })
                  }
                >
                  <option>--PILIH--</option>
                  <option>BENSIN</option>
                  <option>DIESEL</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>
                  <b>Transmisi</b>
                </Form.Label>
                <Form.Control
                  as="select"
                  onChange={(event) =>
                    this.setState({ transmisi: event.target.value })
                  }
                >
                  <option>--PILIH--</option>
                  <option>MANUAL</option>
                  <option>AUTOMATIC</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>
                  <b>Jenis Rem</b>
                </Form.Label>
                <Form.Control
                  as="select"
                  onChange={(event) =>
                    this.setState({ jenis_rem: event.target.value })
                  }
                >
                  <option>--PILIH--</option>
                  <option>ABS</option>
                  <option>NON ABS</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            {/* item feature section */}
            <Form.Row>
              <Form.Group as={Col} controlId="formPowerSteering">
                <Form.Label>
                  <b>Power Steering</b>
                </Form.Label>
                <Form.Control
                  as="select"
                  onChange={(event) =>
                    this.setState({ power_steering: event.target.value })
                  }
                >
                  <option>--PILIH--</option>
                  <option>YA</option>
                  <option>TIDAK</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>
                  <b>GPS</b>
                </Form.Label>
                <Form.Control
                  as="select"
                  onChange={(event) =>
                    this.setState({ gps: event.target.value })
                  }
                >
                  <option>--PILIH--</option>
                  <option>YA</option>
                  <option>TIDAK</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>
                  <b>Smart Key</b>
                </Form.Label>
                <Form.Control
                  as="select"
                  onChange={(event) =>
                    this.setState({ smart_key: event.target.value })
                  }
                >
                  <option>--PILIH--</option>
                  <option>YA</option>
                  <option>TIDAK</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>
                  <b>Airbag</b>
                </Form.Label>
                <Form.Control
                  as="select"
                  onChange={(event) =>
                    this.setState({ airbag: event.target.value })
                  }
                >
                  <option>--PILIH--</option>
                  <option>YA</option>
                  <option>TIDAK</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.submit_data}>
            TAMBAH MOBIL
          </Button>
          <Button variant="danger" onClick={this.props.onHide}>
            BATAL
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default modal_add;
