import React from "react";
import "./../style/productdetail.css";
import Carousel from "./plug in/img_slideshow";

const productdetail = ({ item }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 mt-3">
          <div className="product-title">
            <h3>HONDA ALL NEW CRV 2.4 PRESTIGE </h3>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-sm-9">
          <div className="container">
            <Carousel />
          </div>
        </div>
        <div className="col-sm-3">
          <table className="table table-dark">
            <tbody>
              <tr>
                <th scope="row">MERK</th>
                <td>HONDA</td>
              </tr>
              <tr>
                <th scope="row">NAMA</th>
                <td>ALL NEW CRV 2.4 PRESTIGE</td>
              </tr>
              <tr>
                <th scope="row">TAHUN</th>
                <td>2015</td>
              </tr>
              <tr>
                <th scope="row">KILOMETER</th>
                <td>5500</td>
              </tr>
              <tr>
                <th scope="row">KAPASITAS MESIN</th>
                <td>1500 CC</td>
              </tr>
              <tr>
                <th scope="row">JENIS REM</th>
                <td>ABS</td>
              </tr>
              <tr>
                <th scope="row">BAHAN BAKAR</th>
                <td>BENSIN</td>
              </tr>
              <tr>
                <th scope="row">HARGA</th>
                <td>Rp 315.000.000,00</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default productdetail;
