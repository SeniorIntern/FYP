import React, { useState } from "react";
import Axios from "axios";
import "./Login.css";
// additional imports for testing
import { Link, useHistory } from "react-router-dom";
import logo from "./img/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
    const history = useHistory(); // change url after login

    // Defining useStates
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // for testing
    // const [loginStatus, setLoginStatus] = useState("");

    // added later
    // Axios.defaults.withCredentials = true;

    const login = () => {
        // define variables username, password to use in backend
        Axios.post("http://localhost:3001/login", {
            username: username,
            password: password,
        }).then((response) => {
            if (response.data.message) {
                toast.error(response.data.message);
                // setLoginStatus();
            } else {
                window.location.href =
                    "http://127.0.0.1:5500/visualization/dashboard.html";
                // setLoginStatus(response.data[0].username);
                toast.success(
                    "Login Sucessful. Welcome " +
                        response.data[0].username +
                        ". Redirecting..."
                );
            }
        });
    };

    return (
        <div className="login">
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <div className="loginContainer">
                {/* login form here */}
                <div className="right__content">
                    <img src={logo} alt="" className="web__logo" />
                    <div className="inputContainer">
                        <input
                            type="text"
                            placeholder="Username"
                            required
                            onChange={(e) => {
                                setUsername(e.target.value);
                            }}
                        />
                    </div>

                    <div className="inputContainer">
                        <input
                            type="password"
                            placeholder="Password"
                            required
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                    </div>

                    {/* Login Button setup with onClick event */}
                    <button onClick={login} className="login__signInButton">
                        <b>Log In</b>
                    </button>

                    <hr />
                    <p style={{ margin: "auto" }} className="labelText">
                        New User?
                    </p>

                    <Link to="./Register">
                        <button className="login__registerButton">
                            <b>Create new account</b>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
