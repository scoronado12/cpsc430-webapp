var express = require("express");
var mysql = require("mysql");
var app = express();
var cors = require("cors");

// Initialize DB connection.
var pool = mysql.createPool({ 
    connectionLimit: 50,            // Number of concurrent connections to DB.
    host: process.env.MYSQL_HOST,   // To be changed.
    user: "root",                   // To be changed.
    password: "mysql-root-pass",    // Might want to hash.
    database: "earth_sci",
    debug: false
});

app.use(cors());

app.get("/email", (req, res) => {
    const { field } = req.query;

    pool.query('SELECT * FROM alumnis WHERE email = ?', [field], (err, result) => {
      if (err) {
         console.log(err);
         return res.send(err);
      } else {
         console.log(result);
         return res.send(result);
      }
    });
});

app.get("/first_name", (req, res) => {
    const { field } = req.query;

    pool.query('SELECT * FROM alumnis WHERE first_name = ?', [field], (err, result) => {
      if (err) {
         console.log(err);
         return res.send(err);
      } else {
         console.log(result);
         return res.send(result);
      }
    });
});

app.get("/last_name", (req, res) => {
    const { field } = req.query;

    pool.query('SELECT * FROM alumnis WHERE last_name = ?', [field], (err, result) => {
      if (err) {
         console.log(err);
         return res.send(err);
      } else {
         console.log(result);
         return res.send(result);
      }
    });
});

app.get("/major", (req, res) => {
    const { field } = req.query;

    pool.query('SELECT * FROM alumnis WHERE major = ?', [field], (err, result) => {
      if (err) {
         console.log(err);
         return res.send(err);
      } else {
         console.log(result);
         return res.send(result);
      }
    });
});

app.get("/graduation_year", (req, res) => {
    const { field } = req.query;

    pool.query('SELECT * FROM alumnis WHERE graduation_year = ?', [field], (err, result) => {
      if (err) {
         console.log(err);
         return res.send(err);
      } else {
         console.log(result);
         return res.send(result);
      }
    });
});

app.get("/occupation", (req, res) => {
    const { field } = req.query;

    pool.query('SELECT * FROM alumnis WHERE occupation = ?', [field], (err, result) => {
      if (err) {
         console.log(err);
         return res.send(err);
      } else {
         console.log(result);
         return res.send(result);
      }
    });
});

app.get("/newsletter", (req, res) => {
    const { field } = req.query;

    pool.query('SELECT * FROM alumnis WHERE newletter_opt_in = ?', [field], (err, result) => {
      if (err) {
         console.log(err);
         return res.send(err);
      } else {
         console.log(result);
         return res.send(result);
      }
    });
});

app.listen(8000, () => {
    console.log("Running...");
});
