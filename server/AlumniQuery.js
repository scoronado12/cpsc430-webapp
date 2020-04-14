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

app.get("/api", async (req, res) => {
    var field = (req.query !== "") ? "%" + req.query + "%" : "";
    var input;
    console.log("Query received...");

    switch (field) {
        case "email":
            input = (req.query.email !== "") ? "%" + req.query.email + "%" : "";
            break;
        case "first_name":
            input = (req.query.first_name !== "") ? "%" + req.query.first_name + "%" : "";
            break;
        case "last_name":
            input = (req.query.last_name !== "") ? "%" + req.query.last_name + "%" : "";
            break;
        case "major":
            input = (req.query.major !== "") ? "%" + req.query.major + "%" : "";
            break;
        case "graduation_year":
            input = (req.query.graduation_year !== "") ? "%" + req.query.graduation_year + "%" : "";
            break;
        case "occupation":
            input = (req.query.occupation !== "") ? "%" + req.query.occupation + "%" : "";
            break;
        case "newletter_opt_in":
            input = (req.query.newletter_opt_in !== "") ? "%" + req.query.newletter_opt_in + "%" : "";
            break;
        default:
            return; // Breaking out, invalid inputs.
    }

    try {
        var result = await pool.query("SELECT * FROM alumnis WHERE $1 = $2", [field, input]);

        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "GET");
        res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,contenttype");
        res.setHeader("Access-Control-Allow-Credentials", true);

        res.json(result.rows);
    } catch (error) {
        console.log("Error running request: ", error);
    }
});

app.listen(8000, () => {
    console.log("Running at: " + process.env.MYSQL_HOST);
});
