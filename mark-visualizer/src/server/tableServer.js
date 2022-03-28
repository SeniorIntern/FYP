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
    const { s_Id, s_Fname, s_Lname, s_Batch, c_Id } = req.body;
    const sqlInsert =
        "Insert Into mark_visualizer.students (s_Id, s_Fname, s_Lname, s_Batch, c_Id) values(?, ?, ?, ?, ?)";
    db.query(
        sqlInsert,
        [s_Id, s_Fname, s_Lname, s_Batch, c_Id],
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
    const { s_Id, s_Fname, s_Lname, s_Batch, c_Id } = req.body;
    const sqlUpdate =
        "UPDATE mark_visualizer.students SET s_Id=?, s_Fname=?, s_Lname=?, s_Batch, c_Id=? WHERE id=?";
    db.query(
        sqlUpdate,
        [s_Id, s_Fname, s_Lname, s_Batch, c_Id, id],
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
    //     "Insert Into students (id, s_Fname, s_Lname, c_Id, c_name) values('NP04CP4A190087', 'Swastika', 'Chhetri', 'CS50', 'BIT')";
    // db.query(sqlInsert, (error, result) => {
    //     console.log("error", error);
    //     console.log("result", result);
    //     res.send("Hello dev");
    // });
});

app.listen(5002, () => {
    console.log("Student Server running on port 5002");
});
