import React from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";
import axios from "axios";
import "./../../style/modal.css";

class modal_add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nama_merk: null,
    };
  }

  submit_data = () => {
    var data_merk = {
      nama_merk: this.state.nama_merk,
    };

    //validation state
    if (this.state.nama_merk == null) {
      alert("Nama merk belum diisi");
    } else {
      //POST method
      axios
        .post("http://localhost:5000/admin/tambahmerk", data_merk, {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            accept: "application/json",
          },
        })
        .then((response) => {
          console.log(response);
          alert("Merk baru telah ditambahkan");
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
          <Modal.Title>
            <b>TAMBAH MERK</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>
                  <b>Nama Merk</b>
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Masukkan nama merk..."
                  onChange={(event) =>
                    this.setState({
                      nama_merk: event.target.value.toUpperCase(),
                    })
                  }
                />
              </Form.Group>
            </Form.Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.submit_data}>
            TAMBAH MERK
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
