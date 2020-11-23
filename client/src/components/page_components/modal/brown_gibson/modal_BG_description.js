import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import "./../../../style/modal_BG_desc.css";

export default class modal_BG_description extends Component {
  render() {
    return (
      <div>
        <Modal
          {...this.props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter centered">
              <b>ALGORITMA BROWN GIBSON</b>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <div className="form align-content-center description-BG">
                <div className="row">
                  <div className="col-12 col-md-offset-6">
                    <p>
                      Algoritma Brown Gibson adalah pemodelan matematika yang
                      digunakan untuk mendukung pengambilan keputusan multi
                      atribut, dimana keputusan tersebut mempertimbangkan faktor
                      objektif yang dikombinasikan dengan pertimbangan faktor
                      subjektif. Metode algoritma ini ditemukan oleh P. Brown
                      dan D. Gibson pada tahun 1972.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-offset-6 mt-3">
                    <p>
                      Pada kasus Naripan Motor ini, Brown Gibson membantu
                      pengguna untuk memilih solusi terbaik dari berbagai mobil
                      bekas yang memiliki banyak atribut (kriteria).{" "}
                      <b>Kriteria objektif</b> mencangkup nilai yang bisa
                      dihitung secara numerik seperti harga mobil, kilometer,
                      dan tahun keluaran. Sedangkan <b>kriteria subjektif</b>{" "}
                      bersifat dinilai secara manusiawi seperti apa jenis rem
                      dan bahan bakarnya, apakah terdapat fitur GPS, dan
                      sebagainya.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12 col-md-offset-6 mt-3">
                    <p>
                      Untuk mencari solusi terbaik, program mengkombinasikan dan
                      menghitung kedua kriteria objektif dan subjektif tersebut
                      menggunakan algoritma Brown Gibson sehingga didapatlah
                      nilai akhir setiap mobil bekas yang ada. Solusi terbaik
                      yaitu mobil bekas dengan nilai akhir tertinggi
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.props.onHide}>
              <b>OKAY</b>
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
