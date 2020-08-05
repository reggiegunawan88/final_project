const express = require("express");
const app = express();
const mysql = require("mysql");

const query_mobil = "SELECT * FROM mobil";

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

app.get("/mobil", (req, res) => {
  pool.query(query_mobil, (err, result) => {
    if (err) {
      return res.send(err);
    } else {
      return res.json({
        data: result,
      });
    }
  });
});

const port = 5000;

app.listen(port, () => {
  console.log("Server listening on port 5000");
});
