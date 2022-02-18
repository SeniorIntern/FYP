import React from "react";
import "./Student.css";

function Student() {
    return (
        <div className="student">
            <div className="student__contentContainer">
                <div className="top__options">
                    <button className="style__button">
                        Create New Profile
                    </button>
                    <button className="style__button">Filter</button>
                    <input
                        type="text"
                        className="style__input"
                        placeholder="Student ID"
                    />
                </div>
            </div>
        </div>
    );
}

export default Student;
