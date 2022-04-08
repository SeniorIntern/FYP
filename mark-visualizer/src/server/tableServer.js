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

/*
app.delete("/api/remove/:id", (req, res) => {
    const { id } = req.params;
    const sqlRemove = "DELETE FROM mark_visualizer.students WHERE id = ?";
    db.query(sqlRemove, id, (error, result) => {
        if (error) {
            console.log(error);
        }
    });
});

// for view btn
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
*/

app.get("/programmes/get", (req, res) => {
    const sqlGet = "SELECT * FROM mark_visualizer.programmes";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});

app.post("/programmes/post", (req, res) => {
    const { c_id, c_name, m_id, m_name } = req.body;
    const sqlInsert =
        "Insert Into mark_visualizer.programmes (c_id, c_name, m_id, m_name) values(?, ?, ?, ?)";
    db.query(sqlInsert, [c_id, c_name, m_id, m_name], (error, result) => {
        if (error) {
            console.log(error);
        }
    });
});

app.delete("/programmes/remove/:id", (req, res) => {
    const { id } = req.params;
    const sqlRemove = "DELETE FROM mark_visualizer.programmes WHERE id = ?";
    db.query(sqlRemove, id, (error, result) => {
        if (error) {
            console.log(error);
        }
    });
});

app.get("/programmes/get/:id", (req, res) => {
    const { id } = req.params;
    const sqlGet = "SELECT * FROM mark_visualizer.programmes WHERE id=?";
    db.query(sqlGet, id, (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    });
});

app.put("/programmes/update/:id", (req, res) => {
    const { id } = req.params;
    const { c_id, c_name, m_id, m_name } = req.body;
    const sqlUpdate =
        "UPDATE mark_visualizer.programmes SET c_id=?, c_name=?,m_id=?, m_name=? WHERE id=?";
    db.query(sqlUpdate, [c_id, c_name, m_id, m_name, id], (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result);
    });
});

// setup for student-module-result
app.get("/smr/get", (req, res) => {
    const sqlGet = "SELECT * FROM mark_visualizer.student_moduleresult;";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});

app.put("/smr/update/:id", (req, res) => {
    const { id } = req.params;
    const { s_Id, CC12, CC49, TG406, SG12, Average } = req.body;
    const sqlUpdate =
        "UPDATE mark_visualizer.student_moduleresult SET s_Id=?, CC12=?,CC49=?, TG406=?, SG12=?, Average=? WHERE id=?";
    db.query(
        sqlUpdate,
        [s_Id, CC12, CC49, TG406, SG12, Average, id],
        (error, result) => {
            if (error) {
                console.log(error);
            }
            res.send(result);
        }
    );
});

app.listen(5002, () => {
    console.log("Student Server running on port 5002");
});
