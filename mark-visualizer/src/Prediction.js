import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Page.css";
import "./Sidebar.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const text__style = {
    textDecoration: "none",
    color: "white",
};

const ico = {
    width: "36px",
    height: "auto",
    cursor: "pointer",
};

function Prediction() {
    return (
        <div className="student__page">
            {/* <ToastContainer /> */}
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
            {/* Side-Navbar */}
            <div className="sidebar">
                <Link to="/students" style={text__style}>
                    <div className="navbar__options">Students</div>
                </Link>

                <Link to="/programmes" style={text__style}>
                    <div className="navbar__options">Programs</div>
                </Link>
                <Link to="/results" style={text__style}>
                    <div className="navbar__options">Results</div>
                </Link>
                <Link to="/analytics" style={text__style}>
                    <div
                        className="navbar__options"
                        onClick={(event) =>
                            (window.location.href =
                                "http://127.0.0.1:5500/visualization/visualize.html")
                        }
                    >
                        Analytics
                    </div>
                </Link>
                <Link to="/prediction" style={text__style}>
                    <div className="navbar__options">Prediction</div>
                </Link>
            </div>

            {/* student table */}
            <div className="page__container">
                <div className="table__options">
                    <input
                        type="text"
                        placeholder="Student ID"
                        style={{ width: "fit-content" }}
                    />
                    {/* <img src={searchIco} style={ico} alt="" /> */}

                    {/* <Link to="/addStudent"> */}
                    <button className="page_btn">Predict</button>
                    {/* </Link> */}
                </div>
                <div className="studentDetails">
                    <div>
                        <p>Student Name: </p>
                        <p>Batch: </p>
                        <p>Current Year: </p>
                        <br />
                        <h4>First Year Grade: </h4>
                        <h4>Second Year Grade: </h4>
                        <br />
                        <h3>Prediction for Final Year: 54</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Prediction;
