import React from "react";
import NumberFormat from "react-number-format";

const productdata = ({ items }) => {
  return (
    <div>
      <h3>INFORMASI MOBIL BEKAS</h3>
      <table className="table table-dark">
        <tbody>
          <tr>
            <th scope="row">MERK</th>
            <td>{items.merk}</td>
          </tr>
          <tr>
            <th scope="row">NAMA</th>
            <td>{items.nama}</td>
          </tr>
          <tr>
            <th scope="row">TIPE MOBIL</th>
            <td>{items.tipe_mobil}</td>
          </tr>
          <tr>
            <th scope="row">TAHUN</th>
            <td>{items.tahun}</td>
          </tr>
          <tr>
            <th scope="row">KILOMETER</th>
            <td>
              <NumberFormat
                value={items.kilometer}
                displayType={"text"}
                thousandSeparator={true}
              />
            </td>
          </tr>
          <tr>
            <th scope="row">KAPASITAS MESIN</th>
            <td>
              <NumberFormat
                value={items.kapasitas_mesin}
                displayType={"text"}
                thousandSeparator={true}
                suffix={" CC"}
              />
            </td>
          </tr>
          <tr>
            <th scope="row">TRANSMISI</th>
            <td>{items.transmisi}</td>
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
            <td>
              <NumberFormat
                value={items.harga}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"Rp "}
                suffix={",00"}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default productdata;
