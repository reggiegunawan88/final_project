import React from "react";

const productdata = ({ items }) => {
  return (
    <div>
      <table className="table table-dark">
        <tbody>
          <tr>
            <th scope="row">MERK</th>
            <td>"XXX"</td>
          </tr>
          <tr>
            <th scope="row">NAMA</th>
            <td>{items.nama}</td>
          </tr>
          <tr>
            <th scope="row">TAHUN</th>
            <td>{items.tahun}</td>
          </tr>
          <tr>
            <th scope="row">KILOMETER</th>
            <td>{items.kilometer}</td>
          </tr>
          <tr>
            <th scope="row">KAPASITAS MESIN</th>
            <td>{items.kapasitas_mesin} CC</td>
          </tr>
          <tr>
            <th scope="row">JENIS REM</th>
            <td>{items.jenis_rem}</td>
          </tr>
          <tr>
            <th scope="row">BAHAN BAKAR</th>
            <td>{items.bahan_bakar}</td>
          </tr>
          <tr>
            <th scope="row">HARGA</th>
            <td>Rp {items.harga}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default productdata;