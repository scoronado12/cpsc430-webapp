var express = require("express");
var mysql = require("mysql");
var app = express();

// Initialize DB connection.
var pool = mysql.createPool({ 
    connectionLimit: 50,            // Number of concurrent connections to DB.
    host: "localhost",              // To be changed.
    user: "root",                   // To be changed.
    password: "mysql-root-pass",    // Might want to hash.
    database: "earth_sci",
    debug: false
});

// Shows the alumnis list.
function showAlumnis(req, res) {
    pool.query("SELECT * FROM alumnis", (err, result) => {
        if (err) {
            console.log(err);
            return;
        } else {
            res.json(result);
        }
    });
}

// Search for alumni by graduation year.
function findGradYear(year) {
    var query = mysql.format("SELECT * FROM alumnis WHERE graduation_year = ?", [year]);
    var result = pool.query(query);
    res.json(result.rows);
}

// Search for alumni by occupation.
function findOccupation(req, res) {
    var query = mysql.format("SELECT * FROM alumnis WHERE occupation = ?", [req]);
    var result = pool.query(query);
    res.json(result.rows);
}

app.get("
