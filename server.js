const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const query_mobil = "SELECT * FROM mobil";
const query_harga_asc = "SELECT * FROM mobil ORDER BY harga ASC";
const query_harga_desc = "SELECT * FROM mobil ORDER BY harga DESC";
const query_tahun_oldest = "SELECT * FROM mobil ORDER BY tahun ASC";
const query_tahun_newest = "SELECT * FROM mobil ORDER BY tahun DESC";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "naripan_motor",
});

pool.getConnection(function (err, connection) {
  if (err) throw err; // not connected!

  // Use the connection
  connection.query(query_mobil, function (error, results, fields) {
    // When done with the connection, release it.
    connection.release();

    // Handle error after the release.
    if (error) throw error;

    // Don't use the connection here, it has been returned to the pool.
  });
});

//prevent cors
app.use(cors());

//query get all items
app.get("/mobil", (req, res) => {
  pool.query(query_mobil, (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json(result);
    }
  });
});

//query get items by highest price
app.get("/mobil/hargatertinggi", (req, res) => {
  pool.query(query_harga_desc, (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json(result);
    }
  });
});

//query get items by lowest price
app.get("/mobil/hargaterendah", (req, res) => {
  pool.query(query_harga_asc, (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json(result);
    }
  });
});

//query get items by newest year
app.get("/mobil/tahunterbaru", (req, res) => {
  pool.query(query_tahun_newest, (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json(result);
    }
  });
});

//query get items by oldest year
app.get("/mobil/tahuntertua", (req, res) => {
  pool.query(query_tahun_oldest, (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json(result);
    }
  });
});

const port = 5000;

app.listen(port, () => {
  console.log("Server listening on port 5000");
});
