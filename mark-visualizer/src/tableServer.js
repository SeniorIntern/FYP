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
    const sqlGet = "SELECT * FROM mark_visualizer.students";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});

app.post("/api/post", (req, res) => {
    const { s_id, s_fname, s_lname, c_id, c_name } = req.body;
    const sqlInsert =
        "Insert Into mark_visualizer.students (s_id, s_fname, s_lname, c_id, c_name) values(?, ?, ?, ?, ?)";
    db.query(
        sqlInsert,
        [s_id, s_fname, s_lname, c_id, c_name],
        (error, result) => {
            if (error) {
                console.log(error);
            }
        }
    );
});

app.delete("/api/remove/:id", (req, res) => {
    const { id } = req.params;
    const sqlRemove = "DELETE FROM mark_visualizer.students WHERE id = ?";
    db.query(sqlRemove, id, (error, result) => {
        if (error) {
            console.log(error);
        }
    });
});

app.get("/api/get/:id", (req, res) => {
    const { id } = req.params;
    const sqlGet = "SELECT * FROM mark_visualizer.students WHERE id=?";
    db.query(sqlGet, id, (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    });
});

app.put("/api/update/:id", (req, res) => {
    const { id } = req.params;
    const { s_id, s_fname, s_lname, c_id, c_name } = req.body;
    const sqlUpdate =
        "UPDATE mark_visualizer.students SET s_id=?, s_fname=?, s_lname=?, c_id=?, c_name=? WHERE id=?";
    db.query(
        sqlUpdate,
        [s_id, s_fname, s_lname, c_id, c_name, id],
        (error, result) => {
            if (error) {
                console.log(error);
            }
            res.send(result);
        }
    );
});

app.get("/", (req, res) => {
    // const sqlInsert =
    //     "Insert Into students (id, s_fname, s_lname, c_id, c_name) values('NP04CP4A190087', 'Swastika', 'Chhetri', 'CS50', 'BIT')";
    // db.query(sqlInsert, (error, result) => {
    //     console.log("error", error);
    //     console.log("result", result);
    //     res.send("Hello dev");
    // });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
