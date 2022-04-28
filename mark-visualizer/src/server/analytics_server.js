const express = require("express");
const app = express();
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
    const sqlGet = "SELECT * FROM mark_visualizer.student_moduleresult";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});

app.get("/api/get/:s_Id", (req, res) => {
    const { s_Id } = req.params;
    const sqlGet =
        "SELECT * FROM mark_visualizer.student_moduleresult WHERE s_Id=?";
    db.query(sqlGet, s_Id, (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    });
});

app.get("/sectionAverage/get", (req, res) => {
    const sqlGet = "SELECT * FROM mark_visualizer.sectionaverage";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});

app.get("/sectionAverage/get/:m_Code", (req, res) => {
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

app.listen(5005, () => {
    console.log("student_moduleresult server running on port 5005");
});
