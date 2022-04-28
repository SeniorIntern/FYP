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
                // alert("Wrong username/password combination");
                toast.error(response.data.message);
                // setLoginStatus();
            } else {
                history.push("/Page");
                // added later
                // setLoginStatus(response.data[0].username);
                // toast.success("Login Sucessful. Welcome " + response.data[0].username + ". Redirecting...");
            }
        });
    };

    toast.success("Logout sucessful!", {
        position: "top-center",
        autoClose: 9000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    return (
        <div className="login">
            <ToastContainer />
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
                    <button onClick={login} className="login__signInButton">
                        <b>Log In</b>
                    </button>
                    <hr />
                    {/* disable login message, replace with toastify */}
                    {/* <h1>{loginStatus}</h1> */}
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
