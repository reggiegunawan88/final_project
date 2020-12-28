import React from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";
import axios from "axios";
import "./../../style/modal.css";

class modal_edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idtipe: null,
      nama_tipe: null,
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.idtipe !== prevProps.idtipe) {
      //prevent infinite loop
      this.setState({ idtipe: this.props.idtipe });
    }
  }

  submit_data = () => {
    var tipe_data = {
      idtipe: this.state.idtipe,
      nama_tipe: this.state.nama_tipe,
    };

    //validation state
    if (this.state.nama_tipe == null) {
      alert("Nama tipe belum diisi");
    } else {
      //POST method
      axios
        .post("http://localhost:5000/admin/ubahtipe", tipe_data, {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            accept: "application/json",
          },
        })
        .then((response) => {
          console.log(response);
          alert("Tipe mobil telah diperbarui");
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
            <b>EDIT TIPE</b>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Row>
              <Form.Group as={Col}>
                <Form.Label>
                  <b>ID TIPE</b>
                </Form.Label>
                <Form.Control type="text" value={this.props.idtipe} disabled />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>
                  <b>Nama Tipe</b>
                </Form.Label>
                <Form.Control
                  type="email"
                  value={this.state.nama_tipe}
                  onChange={(e) =>
                    this.setState({ nama_tipe: e.target.value.toUpperCase() })
                  }
                />
              </Form.Group>
            </Form.Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={this.submit_data}>
            UBAH TIPE MOBIL
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
