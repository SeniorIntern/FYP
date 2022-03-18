import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./Login.css";
// additional imports for testing
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";
import logo from "./img/logo.png";

function Login() {
    const history = useHistory(); // change url after login

    // Defining useStates
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // for testing
    const [loginStatus, setLoginStatus] = useState("");

    // added later
    // Axios.defaults.withCredentials = true;

    const login = () => {
        // define variables username, password to use in backend
        Axios.post("http://localhost:3001/login", {
            username: username,
            password: password,
        }).then((response) => {
            if (response.data.message) {
                // alert("Wrong username/password combination");
                setLoginStatus(response.data.message);
            } else {
                history.push("/page");
                // added later
                // setLoginStatus(response.data[0].username);
            }
        });
    };

    return (
        <div className="login">
            <div className="loginContainer">
                <img src={logo} alt="" className="web__logo" />
                <input
                    type="text"
                    placeholder="Enter Username"
                    onChange={(e) => {
                        setUsername(e.target.value);
                    }}
                />
                <input
                    type="password"
                    placeholder="Enter Password"
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                />
                <button onClick={login} className="login__signInButton">
                    Login
                </button>
                <h1>{loginStatus}</h1>
                <p style={{ margin: "auto" }}>New User?</p>
                <Link to="./Register">
                    <button className="login__registerButton">
                        CREATE your Account
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Login;
