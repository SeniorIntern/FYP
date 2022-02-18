import React, { useState } from "react";
import Axios from "axios";
import "./Register.css";

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
        <div className="registerContainer">
            <h1>Register here</h1>
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
            <button onClick={register}>Register</button>
            <p>
                Already Registered<a href="./login">Login Here</a>
            </p>
        </div>
    );
}

export default Register;
