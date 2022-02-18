import React, { useState } from "react";
import Axios from "axios";
import "./Login.css";
// additional imports for testing
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";

function Login() {
    const history = useHistory(); // change url after login

    // Defining useStates
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        // define variables username, password to use in backend
        Axios.post("http://localhost:3001/login", {
            username: username,
            password: password,
        }).then((response) => {
            if (response.data.message) {
                alert("Wrong username/password combination");
            } else {
                history.push("/");
            }
        });
    };

    return (
        <div className="loginContainer">
            <h1>Login Form</h1>
            <input
                type="text"
                placeholder="username"
                onChange={(e) => {
                    setUsername(e.target.value);
                }}
            />
            <input
                type="password"
                placeholder="password"
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
            />
            <button onClick={login}>Login</button>
            <p>
                New User?<a href="./Register">Register Here</a>
            </p>
        </div>
    );
}

export default Login;
