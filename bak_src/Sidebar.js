import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__content">
                <Link to="/student">
                    <span className="navbar__options">Student</span>
                </Link>
                <Link to="/student">
                    <div className="navbar__options">Enrollment</div>
                </Link>
                <Link to="/student">
                    <div className="navbar__options">Leaderboard</div>
                </Link>
                <Link to="/student">
                    <div className="navbar__options">Analytics</div>
                </Link>
                <Link to="/student">
                    <div className="navbar__options">Setting</div>
                </Link>
            </div>
        </div>
    );
}

export default Sidebar;
