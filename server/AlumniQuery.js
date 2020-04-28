var express = require("express");
var mysql = require("mysql");
var app = express();
var cors = require("cors");
var bodyparser = require("body-parser");

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
app.use(bodyparser.urlencoded({ extended: true}));
app.use(bodyparser.json());

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


app.post("/alumni_insert", (req, res) => {
    const first_name  = req.body.first_name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const occupation = req.body.occupation;
    const degree_obtained = req.body.degree_obtained;
    const grad_year  = req.body.grad_year;
    const bio = req.body.bio;
    const newsletter_optin = req.body.newsletter_optin;
    
    console.log("QUERY" + req.body.first_name);
    
    /*degree_obtained is the same as major value within db table*/
    pool.query('INSERT INTO alumnis VALUES (?,?,?,?,?,?,?,?)', [email, first_name, last_name, degree_obtained, grad_year, occupation, newsletter_optin, bio], (err, result) => {
      if (err && !result) {
         console.log(err);
         console.log("bad insert or error");
         /*bad insert*/
         
         return res.send(err);
      } else {
         console.log(result);
         console.log(err);
         return res.send(result);
      }
    }).on('error', function(e){
        res.sendStatus(408);
        console.log("Timed out");
        console.log(e);
    }).end();
});

app.listen(8000, () => {
    console.log("Running...");
});
