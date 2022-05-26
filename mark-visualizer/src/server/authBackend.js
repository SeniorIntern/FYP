const express = require("express");
const mysql = require("mysql");
const app = express(); // create express server on variable(app)
const cors = require("cors");

app.use(express.json()); // automatically parse every object sent from fron-end
app.use(cors());

// for password hashing
const bcrypt = require("bcrypt");
const saltRounds = 10;

// for cookie and session mgmnt
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const { toast } = require("react-toastify");

app.use(express.json()); // automatically parse every object sent from fron-end
app.use(
    cors({
        origin: ["http://localhost:3000/"],
        methods: ["GET", "POST"],
        credentials: true,
    })
);

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
    session({
        key: "userID",
        secret: "subscribe",
        resave: false,
        saveUninitialized: false,
        cookie: {
            expires: 60 * 60 * 24,
        },
    })
);

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "123Rabbit",
    database: "mark_visualizer",
});

app.post("/register", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const id = req.body.id;

    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            console.log(err);
        }

        db.query(
            "INSERT INTO mark_visualizer.users (id, username, password) VALUES (?,?,?)",
            [id, username, hash],
            (err, result) => {
                console.log(err);
            }
        );
    });
});

// added later
/*
app.get("/login", (req, res) => {
    if (req.session.user) {
        res.send({ loggedIn: true, user: req.session.user });
    } else {
        res.send({ loggedIn: false });
    }
});
*/

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT * FROM mark_visualizer.users WHERE username =?;",
        username,
        (err, result) => {
            if (result.length > 0) {
                bcrypt.compare(
                    password,
                    result[0].password,
                    (error, response) => {
                        if (response) {
                            req.session.user = result;
                            console.log(req.session.user);
                            // display username
                            // console.log(result[0].username);
                            res.send(result);
                        } else {
                            res.send({
                                message: "Wrong username/password combination",
                            });
                        }
                    }
                );
            } else {
                res.send({ message: "User doesn't exist" });
            }
        }
    );
});

// settings listener of our express server
app.listen(3001, (err) => {
    if (!err) {
        console.log("Connection Sucessful. Runnign on port 3001");
    } else {
        console.log("port closed");
    }
});
