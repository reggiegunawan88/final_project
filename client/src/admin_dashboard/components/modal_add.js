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
      powersteering: null,
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
      this.setState(
        {
          list_merk_mobil: res_merk.data,
          list_tipe_mobil: res_tipe.data,
        },
        () => console.log(this.state.list_tipe_mobil)
      );
    } catch (error) {}
  }

  submit_data = () => {
    console.log(
      "merk: " + this.state.merk_mobil,
      "tipe: " + this.state.tipe_mobil
    );
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
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>
                  <b>Harga</b>
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Masukkan harga mobil..."
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
                  {this.state.list_merk_mobil.map((item) => (
                    <option>{item.merk}</option>
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
                  {this.state.list_tipe_mobil.map((item) => (
                    <option>{item.tipe_mobil}</option>
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
                ></Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>
                  <b>Jumlah Kilometer</b>
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Masukkan jumlah kilometer..."
                ></Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>
                  <b>Kapasitas Mesin</b>
                </Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Masukkan kapasitas mesin..."
                ></Form.Control>
              </Form.Group>
            </Form.Row>

            {/* bahan_bakar, transmisi, and jenis_rem */}
            <Form.Row>
              <Form.Group as={Col} controlId="formPowerSteering">
                <Form.Label>
                  <b>Bahan Bakar</b>
                </Form.Label>
                <Form.Control as="select" defaultValue="Pilih...">
                  <option>BENSIN</option>
                  <option>DIESEL</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>
                  <b>Transmisi</b>
                </Form.Label>
                <Form.Control as="select" defaultValue="Pilih...">
                  <option>MANUAL</option>
                  <option>AUTOMATIC</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>
                  <b>Jenis Rem</b>
                </Form.Label>
                <Form.Control as="select" defaultValue="Pilih...">
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
                <Form.Control as="select" defaultValue="Pilih...">
                  <option>YA</option>
                  <option>TIDAK</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>
                  <b>GPS</b>
                </Form.Label>
                <Form.Control as="select" defaultValue="YA">
                  <option>YA</option>
                  <option>TIDAK</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>
                  <b>Smart Key</b>
                </Form.Label>
                <Form.Control as="select" defaultValue="YA">
                  <option>YA</option>
                  <option>TIDAK</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>
                  <b>Airbag</b>
                </Form.Label>
                <Form.Control placeholder="Pilih..." as="select">
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
