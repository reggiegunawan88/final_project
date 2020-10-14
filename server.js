const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const allowedOrigins = ["http://localhost:3000", "http://localhost:5000"];

//prevent cors
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        var msg =
          "The CORS policy for this site does not " +
          "allow access from the specified Origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
  })
);

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "naripan_motor",
});

const query_mobil =
  "SELECT idmobil,nama,harga,tahun,kilometer,kapasitas_mesin,bahan_bakar,jenis_rem,transmisi,merk,tipe_mobil, powersteering, gps, keyless_entry, airbag from mobil inner join merk_mobil on mobil.idmerk = merk_mobil.idmerk inner join tipe_mobil on mobil.idtipe = tipe_mobil.idtipe ORDER BY idmobil ASC";
const query_get_img = "select idmobil, img_url from gambar_mobil order by idmobil asc";
const query_merkmobil = "SELECT merk FROM merk_mobil";
const query_tipemobil = "SELECT tipe_mobil FROM tipe_mobil";

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

//query to get all items's images
app.get("/naripanmotor_img", (req, res) => {
  pool.query(query_get_img, (err, result) => {
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

//query get items by car brand
app.get("/mobil/merkmobil", (req, res) => {
  pool.query(query_merkmobil, (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json(result);
    }
  });
});

//query get items by car type
app.get("/mobil/tipemobil", (req, res) => {
  pool.query(query_tipemobil, (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json(result);
    }
  });
});

//query send result from SECC selection (part 1 selection)
app.post("/mobil/result_SECC", (req, res) => {
  const data = {
    merk_mobil: req.body.merk_mobil,
    tipe_mobil: req.body.tipe_mobil,
    harga_1: req.body.harga_1,
    harga_2: req.body.harga_2,
    tahun_1: req.body.tahun_1,
    tahun_2: req.body.tahun_2,
  };
  const merk_mobil = '"' + data.merk_mobil + '"';
  const tipe_mobil = '"' + data.tipe_mobil + '"';
  const harga_1 = data.harga_1,
    harga_2 = data.harga_2;
  const tahun_1 = data.tahun_1,
    tahun_2 = data.tahun_2;

  //do MySQL query
  var query_SECC = "";
  if(merk_mobil == "any" && tipe_mobil == "any"){
    query_SECC =
    "SELECT idmobil,nama,harga,tahun,kilometer,kapasitas_mesin,bahan_bakar,jenis_rem,transmisi,merk,tipe_mobil, powersteering, gps, keyless_entry, airbag from mobil inner join merk_mobil on mobil.idmerk = merk_mobil.idmerk inner join tipe_mobil on mobil.idtipe = tipe_mobil.idtipe where harga >= " +
    harga_1 +
    " AND harga <= " +
    harga_2 +
    " AND tahun >= " +
    tahun_1 +
    " AND tahun <= " +
    tahun_2 +
    " order by idmobil asc";
  }
  else if(merk_mobil == "any" && tipe_mobil != "any"){
    query_SECC =
    "SELECT idmobil,nama,harga,tahun,kilometer,kapasitas_mesin,bahan_bakar,jenis_rem,transmisi,merk,tipe_mobil, powersteering, gps, keyless_entry, airbag from mobil inner join merk_mobil on mobil.idmerk = merk_mobil.idmerk inner join tipe_mobil on mobil.idtipe = tipe_mobil.idtipe where harga >= " +
    harga_1 +
    " AND harga <= " +
    harga_2 +
    " AND tahun >= " +
    tahun_1 +
    " AND tahun <= " +
    tahun_2 +
    " AND merk = " +
    merk_mobil +
    " order by idmobil asc";
  }
  else if(tipe_mobil == "any" && merk_mobil != "any"){
    query_SECC =
    "SELECT idmobil,nama,harga,tahun,kilometer,kapasitas_mesin,bahan_bakar,jenis_rem,transmisi,merk,tipe_mobil, powersteering, gps, keyless_entry, airbag from mobil inner join merk_mobil on mobil.idmerk = merk_mobil.idmerk inner join tipe_mobil on mobil.idtipe = tipe_mobil.idtipe where harga >= " +
    harga_1 +
    " AND harga <= " +
    harga_2 +
    " AND tahun >= " +
    tahun_1 +
    " AND tahun <= " +
    tahun_2 +
    " AND tipe_mobil = " +
    tipe_mobil +
    " order by idmobil asc";
  }
else{
  query_SECC =
    "SELECT idmobil,nama,harga,tahun,kilometer,kapasitas_mesin,bahan_bakar,jenis_rem,transmisi,merk,tipe_mobil, powersteering, gps, keyless_entry, airbag from mobil inner join merk_mobil on mobil.idmerk = merk_mobil.idmerk inner join tipe_mobil on mobil.idtipe = tipe_mobil.idtipe where harga >= " +
    harga_1 +
    " AND harga <= " +
    harga_2 +
    " AND tahun >= " +
    tahun_1 +
    " AND tahun <= " +
    tahun_2 +
    " AND merk = " +
    merk_mobil +
    " AND tipe_mobil = " +
    tipe_mobil +
    " order by idmobil asc";
}
  pool.query(query_SECC, (err, result) => {
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
