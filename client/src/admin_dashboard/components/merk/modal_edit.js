import React from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";
import axios from "axios";
import "./../../style/modal.css";

class modal_edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idmerk: null,
      nama_merk: null,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.idmerk !== prevProps.idmerk) {
      //prevent infinite loop
      this.setState({ idmerk: this.props.idmerk });
    }
  }

  submit_data = () => {
    var item_data = {
      idmerk: this.state.idmerk,
      nama_merk: this.state.nama_merk,
    };

    //validation state
    if (this.state.nama_merk == null) {
      alert("Nama merk belum diisi");
    } else {
      //POST method
      axios
        .post("http://localhost:5000/admin/ubahmerk", item_data, {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            accept: "application/json",
          },
        })
        .then((response) => {
          console.log(response);
          alert("Merk mobil telah diperbarui");
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
            <b>EDIT MERK</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>
                  <b>ID Merk</b>
                </Form.Label>
                <Form.Control type="text" value={this.props.idmerk} disabled />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>
                  <b>Nama Merk</b>
                </Form.Label>
                <Form.Control
                  type="email"
                  value={this.state.nama_merk}
                  onChange={(e) =>
                    this.setState({ nama_merk: e.target.value.toUpperCase() })
                  }
                />
              </Form.Group>
            </Form.Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.submit_data}>
            UBAH MERK MOBIL
          </Button>
          <Button variant="danger" onClick={this.props.onHide}>
            BATAL
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default modal_edit;
