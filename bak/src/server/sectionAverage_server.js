const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");

const db = mysql.createPool({
    user: "root",
    host: "localhost",
    password: "123Rabbit",
    database: "mark_visualizer",
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/get", (req, res) => {
    const sqlGet = "SELECT * FROM mark_visualizer.sectionaverage";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});

app.get("/api/get/:m_Code", (req, res) => {
    const { m_Code } = req.params;
    const sqlGet =
        "SELECT * FROM mark_visualizer.sectionaverage WHERE m_Code=?";
    db.query(sqlGet, m_Code, (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    });
});

app.listen(5006, () => {
    console.log("sectionaverage server running on port 5006");
});
