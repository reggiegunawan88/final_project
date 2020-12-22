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
  "SELECT idmobil,nama,harga,tahun,kilometer,kapasitas_mesin,bahan_bakar,jenis_rem,transmisi,merk,tipe_mobil, powersteering, gps, smart_key, airbag from mobil inner join merk_mobil on mobil.idmerk = merk_mobil.idmerk inner join tipe_mobil on mobil.idtipe = tipe_mobil.idtipe ORDER BY idmobil ASC";
const query_get_img =
  "select idmobil, img_url from gambar_mobil order by idmobil asc";
const query_merkmobil = "SELECT * FROM merk_mobil";
const query_tipemobil = "SELECT * FROM tipe_mobil";

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
    km_1: req.body.km_1,
    km_2: req.body.km_2,
  };
  const merk_mobil = '"' + data.merk_mobil + '"';
  const tipe_mobil = '"' + data.tipe_mobil + '"';
  const harga_1 = data.harga_1,
    harga_2 = data.harga_2,
    tahun_1 = data.tahun_1,
    tahun_2 = data.tahun_2,
    km_1 = data.km_1,
    km_2 = data.km_2;

  //do MySQL query
  var query_SECC = "";
  if (merk_mobil === '"all"' && tipe_mobil === '"all"') {
    query_SECC =
      "SELECT idmobil,nama,harga,tahun,kilometer,kapasitas_mesin,bahan_bakar,jenis_rem,transmisi,merk,tipe_mobil, powersteering, gps, smart_key, airbag from mobil inner join merk_mobil on mobil.idmerk = merk_mobil.idmerk inner join tipe_mobil on mobil.idtipe = tipe_mobil.idtipe where harga >= " +
      harga_1 +
      " AND harga <= " +
      harga_2 +
      " AND tahun >= " +
      tahun_1 +
      " AND tahun <= " +
      tahun_2 +
      " AND kilometer >= " +
      km_1 +
      " AND kilometer <= " +
      km_2 +
      " order by idmobil asc";
  } else if (merk_mobil == '"all"' && tipe_mobil != '"all"') {
    query_SECC =
      "SELECT idmobil,nama,harga,tahun,kilometer,kapasitas_mesin,bahan_bakar,jenis_rem,transmisi,merk,tipe_mobil, powersteering, gps, smart_key, airbag from mobil inner join merk_mobil on mobil.idmerk = merk_mobil.idmerk inner join tipe_mobil on mobil.idtipe = tipe_mobil.idtipe where harga >= " +
      harga_1 +
      " AND harga <= " +
      harga_2 +
      " AND tahun >= " +
      tahun_1 +
      " AND tahun <= " +
      tahun_2 +
      " AND kilometer >= " +
      km_1 +
      " AND kilometer <= " +
      km_2 +
      " AND merk = `merk` " +
      " AND tipe_mobil = " +
      tipe_mobil +
      " order by idmobil asc";
  } else if (tipe_mobil == '"all"' && merk_mobil != '"all"') {
    query_SECC =
      "SELECT idmobil,nama,harga,tahun,kilometer,kapasitas_mesin,bahan_bakar,jenis_rem,transmisi,merk,tipe_mobil, powersteering, gps, smart_key, airbag from mobil inner join merk_mobil on mobil.idmerk = merk_mobil.idmerk inner join tipe_mobil on mobil.idtipe = tipe_mobil.idtipe where harga >= " +
      harga_1 +
      " AND harga <= " +
      harga_2 +
      " AND tahun >= " +
      tahun_1 +
      " AND tahun <= " +
      tahun_2 +
      " AND kilometer >= " +
      km_1 +
      " AND kilometer <= " +
      km_2 +
      " AND tipe_mobil = `tipe_mobil`" +
      " AND merk = " +
      merk_mobil +
      " order by idmobil asc";
  } else {
    query_SECC =
      "SELECT idmobil,nama,harga,tahun,kilometer,kapasitas_mesin,bahan_bakar,jenis_rem,transmisi,merk,tipe_mobil, powersteering, gps, smart_key, airbag from mobil inner join merk_mobil on mobil.idmerk = merk_mobil.idmerk inner join tipe_mobil on mobil.idtipe = tipe_mobil.idtipe where harga >= " +
      harga_1 +
      " AND harga <= " +
      harga_2 +
      " AND tahun >= " +
      tahun_1 +
      " AND tahun <= " +
      tahun_2 +
      " AND kilometer >= " +
      km_1 +
      " AND kilometer <= " +
      km_2 +
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

//admin webservice
/* add item to database */
app.post("/admin/tambahmobil", (req, res) => {
  const data = {
    nama: `'` + req.body.nama_mobil + `'`,
    harga: `'` + req.body.harga + `'`,
    merk: `'` + req.body.merk_mobil + `'`,
    tipe: `'` + req.body.tipe_mobil + `'`,
    tahun: `'` + req.body.tahun_keluaran + `'`,
    km: `'` + req.body.km + `'`,
    kapasitas_mesin: `'` + req.body.kapasitas_mesin + `'`,
    bahan_bakar: `'` + req.body.bahan_bakar + `'`,
    transmisi: `'` + req.body.transmisi + `'`,
    jenis_rem: `'` + req.body.jenis_rem + `'`,
    power_steering: `'` + req.body.power_steering + `'`,
    gps: `'` + req.body.gps + `'`,
    smart_key: `'` + req.body.smart_key + `'`,
    airbag: `'` + req.body.airbag + `'`,
  };

  var query =
    "insert into mobil " +
    `(` +
    "nama, harga, tahun, kilometer, kapasitas_mesin, bahan_bakar, jenis_rem, transmisi, idmerk, idtipe, powersteering, gps, smart_key, airbag" +
    `) ` +
    "values " +
    `(` +
    data.nama +
    `,` +
    data.harga +
    `,` +
    data.tahun +
    `,` +
    data.km +
    `,` +
    data.kapasitas_mesin +
    `,` +
    data.bahan_bakar +
    `,` +
    data.jenis_rem +
    `,` +
    data.transmisi +
    `,` +
    data.merk +
    `,` +
    data.tipe +
    `,` +
    data.power_steering +
    `,` +
    data.gps +
    `,` +
    data.smart_key +
    `,` +
    data.airbag +
    `)`;
  console.log(query);

  //process query
  pool.query(query, (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json(result);
    }
  });
});

/* delete item on database*/
app.post("/admin/hapusmobil", (req, res) => {
  var idmobil = req.body.idmobil;
  var query = "DELETE FROM MOBIL WHERE idmobil = " + idmobil;
  console.log(query);
  pool.query(query, (err, result) => {
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
