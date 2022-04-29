import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Page.css";
import "./Sidebar.css";
// import { UserContext } from "./UserContext";
import { FcSearch } from "react-icons/fc";
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

function Dashboard() {
    return (
        <div className="student__page">
            {/* <ToastContainer /> */}
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
                                "http://127.0.0.1:5500/visualization/lineChart.html")
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
                    <FcSearch style={ico} />
                    {/* <img src={searchIco} style={ico} alt="" /> */}

                    <Link to="/addStudent">
                        <button className="page_btn">Add Student</button>
                    </Link>
                    {/* 
                    <Link>
                        <button className="page_btn">Filter</button>
                    </Link> */}
                </div>

                {/* showing user context here */}
                {/* <pre>{JSON.stringify(user, null, 2)}</pre>
                {user ? (
                    <button onClick={() => setUser(null)}>logout</button>
                ) : (
                    <button
                        onClick={async () => {
                            const user = await usrlogin();
                            setUser(user);
                        }}
                    >
                        login
                    </button>
                )} */}
            </div>
        </div>
    );
}

export default Dashboard;
