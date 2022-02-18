// importing necessary modules
const express = require("express");
const mysql = require("mysql");
const app = express(); // create express server on variable(app)
const cors = require("cors");

app.use(express.json()); // automatically parse every object sent from fron-end
app.use(cors());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "123Rabbit",
    database: "mark_visualizer",
});

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT * FROM mark_visualizer.users where username =? AND password =?",
        [username, password],
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }
            if (result.length > 0) {
                res.send(result);
            } else {
                res.send({ message: "Wrong username/password combination" });
            }
        }
    );
});

app.post("/register", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const id = req.body.id;

    db.query(
        "INSERT INTO mark_visualizer.users (id, username, password) VALUES (?,?,?)",
        [id, username, password],
        (err, result) => {
            console.log(err);
        }
    );
});

// settings listener of our express server
app.listen(3001, (err) => {
    if (!err) {
        console.log("Connection Sucessful :D");
    } else {
        console.log(err);
    }
});
