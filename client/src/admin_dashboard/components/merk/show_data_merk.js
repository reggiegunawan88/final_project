import React, { useState, useEffect } from "react";
import Navbar from "../navbar";
import { Button, Table } from "react-bootstrap";
import axios from "axios";
import "./../../style/edit_data.css";

//modal popup
import ModalAdd from "./modal_add";
import ModalEdit from "./modal_edit";

const edit_data = (props) => {
  const [data, setData] = useState([]);
  const [idmerk, setIdMerk] = useState(0);

  //modal trigger
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5000/mobil/merkmobil").then((result) => {
      setData(result.data);
    });
  }, []);

  function edit_data(e) {
    setShowModalEdit(true);
    setIdMerk(e.target.value);
  }

  return (
    <div>
      <Navbar />
      <ModalAdd show={showModalAdd} onHide={() => setShowModalAdd(false)} />
      <ModalEdit
        show={showModalEdit}
        onHide={() => setShowModalEdit(false)}
        idmerk={idmerk}
      />
      <div
        className="container"
        style={{
          marginTop: "100px",
          justifyContent: "center",
        }}
      >
        <div className="upper-area">
          <h3>KELOLA DATA MERK MOBIL</h3>
          <Button variant="success" onClick={() => setShowModalAdd(true)}>
            <b>TAMBAH MERK +</b>
          </Button>
        </div>
        <div className="table-area">
          <div style={{ textAlign: "left", margin: 10 }}>
            <h3>DAFTAR MERK MOBIL BEKAS</h3>
          </div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nama Merk</th>
                <th>Keterangan</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((item) => (
                  <tr>
                    <td>{item.idmerk}</td>
                    <td>{item.merk}</td>
                    <td>
                      <Button
                        variant="primary"
                        className="btn-crud"
                        onClick={(e) => edit_data(e)}
                        value={item.idmerk}
                      >
                        EDIT
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default edit_data;
