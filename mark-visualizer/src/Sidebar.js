import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__content">
                <Link to="/student">
                    <div className="navbar__options">Student</div>
                </Link>
                <div className="navbar__options">Enrollment</div>
                <div className="navbar__options">Leaderboard</div>
                <div className="navbar__options">Analytics</div>
                <div className="navbar__options">Setting</div>
            </div>
        </div>
    );
}

export default Sidebar;
