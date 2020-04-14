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

app.get("/graduation_year", (req, res) => {
    console.log("Query received...");
    const { graduation_year } = req.query;
    console.log(graduation_year);

    pool.query('SELECT * FROM alumnis WHERE graduation_year = ?', [graduation_year], (err, result) => {
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
