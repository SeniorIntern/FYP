import React from "react";
import "./Sidebar.css";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__content">
                <div className="navbar__options">Student</div>
                <div className="navbar__options">Enrollment</div>
                <div className="navbar__options">Leaderboard</div>
                <div className="navbar__options">Analytics</div>
                <div className="navbar__options">Setting</div>
            </div>
        </div>
    );
}

export default Sidebar;
