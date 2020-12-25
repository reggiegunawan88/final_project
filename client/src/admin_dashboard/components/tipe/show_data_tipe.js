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
  const [idtipe, setIdTipe] = useState(0);

  //modal trigger
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5000/mobil/tipemobil").then((result) => {
      setData(result.data);
    });
  }, []);

  function edit_data(e) {
    setShowModalEdit(true);
    setIdTipe(e.target.value);
  }

  return (
    <div>
      <Navbar />
      <ModalAdd show={showModalAdd} onHide={() => setShowModalAdd(false)} />
      <ModalEdit
        show={showModalEdit}
        onHide={() => setShowModalEdit(false)}
        idtipe={idtipe}
      />
      <div
        className="container"
        style={{
          marginTop: "100px",
          justifyContent: "center",
        }}
      >
        <div className="upper-area">
          <h3>KELOLA DATA TIPE MOBIL</h3>
          <Button variant="success" onClick={() => setShowModalAdd(true)}>
            <b>TAMBAH TIPE +</b>
          </Button>
        </div>
        <div className="table-area">
          <div style={{ textAlign: "left", margin: 10 }}>
            <h3>DAFTAR TIPE MOBIL BEKAS</h3>
          </div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nama Tipe</th>
                <th>Keterangan</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((item) => (
                  <tr>
                    <td>{item.idtipe}</td>
                    <td>{item.tipe_mobil}</td>
                    <td>
                      <Button
                        variant="primary"
                        className="btn-crud"
                        onClick={(e) => edit_data(e)}
                        value={item.idtipe}
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
