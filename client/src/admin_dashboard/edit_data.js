import React, { useState, useEffect } from "react";
import Navbar from "./components/navbar";
import { Button, Table } from "react-bootstrap";
import axios from "axios";
import "./style/edit_data.css";

//confirmation alert
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

//modal popup
import ModalAdd from "./components/modal_add";
import ModalEdit from "./components/modal_edit";

const edit_data = (props) => {
  const [data, setData] = useState([]);
  const [id, setId] = useState(0);

  //modal trigger
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5000/mobil").then((result) => {
      setData(result.data);
    });
  }, []);

  function edit_data(e) {
    setShowModalEdit(true);
    setId(e.target.value);
  }

  function delete_data(e) {
    var idmobil = e.target.value;
    confirmAlert({
      title: "Konfirmasi Hapus Data Mobil",
      message: "Apakah anda yakin akan menghapus mobil ini?",
      buttons: [
        {
          label: "Ya",
          onClick: () => ajax_delete_data(idmobil),
        },
        {
          label: "Tidak",
        },
      ],
    });
  }

  function ajax_delete_data(idmobil) {
    var data = { idmobil: idmobil };
    axios
      .post("http://localhost:5000/admin/hapusmobil", data, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          accept: "application/json",
        },
      })
      .then((response) => {
        alert("Mobil telah dihapus");
        window.location.reload();
        console.log(response);
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  return (
    <div>
      <Navbar />
      <ModalAdd show={showModalAdd} onHide={() => setShowModalAdd(false)} />
      <ModalEdit
        show={showModalEdit}
        onHide={() => setShowModalEdit(false)}
        idmobil={id}
      />
      <div
        className="container"
        style={{
          marginTop: "100px",
          justifyContent: "center",
        }}
      >
        <div className="upper-area">
          <h3>KELOLA DATA MOBIL</h3>
          <Button variant="success" onClick={() => setShowModalAdd(true)}>
            <b>TAMBAH MOBIL +</b>
          </Button>
        </div>
        <div className="table-area">
          <div style={{ textAlign: "left", margin: 10 }}>
            <h3>DAFTAR MOBIL BEKAS</h3>
          </div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nama Mobil</th>
                <th>Merk</th>
                <th>Tipe</th>
                <th>Harga (dalam juta)</th>
                <th>Keterangan</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((item) => (
                  <tr>
                    <td>{item.idmobil}</td>
                    <td>{item.nama}</td>
                    <td>{item.merk}</td>
                    <td>{item.tipe_mobil}</td>
                    <td>{item.harga}</td>
                    <td>
                      <Button
                        variant="primary"
                        className="btn-crud"
                        onClick={(e) => edit_data(e)}
                        value={item.idmobil}
                      >
                        EDIT
                      </Button>
                      <Button
                        variant="danger"
                        className="btn-crud"
                        value={item.idmobil}
                        onClick={(e) => delete_data(e)}
                      >
                        DELETE
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
