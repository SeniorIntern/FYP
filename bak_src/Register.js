import React, { useState } from "react";
import Axios from "axios";
import "./Register.css";
import logo from "./img/logo.png";
import { Link } from "react-router-dom";

function Register() {
    // Defining useStates
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [idReg, setIdReg] = useState("");

    const register = () => {
        // define variables username, password to use in backend
        Axios.post("http://localhost:3001/register", {
            username: usernameReg,
            password: passwordReg,
            id: idReg,
        }).then((response) => {
            console.log(response);
        });
    };

    return (
        <div className="register">
            <div className="registerContainer">
                <img src={logo} alt="" className="web__logo" />
                <input
                    type="text"
                    placeholder="user ID"
                    onChange={(e) => {
                        setIdReg(e.target.value);
                    }}
                />
                <input
                    type="text"
                    placeholder="username"
                    onChange={(e) => {
                        setUsernameReg(e.target.value);
                    }}
                />
                <input
                    type="text"
                    placeholder="password"
                    onChange={(e) => {
                        setPasswordReg(e.target.value);
                    }}
                />
                <button onClick={register} className="login__registerButton">
                    Register
                </button>
                <p style={{ margin: "auto" }}>Already Registered?</p>
                <Link to="./login">
                    <button className="login__signInButton">
                        LOGIN you Account
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Register;
