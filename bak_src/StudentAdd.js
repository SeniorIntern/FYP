import React from "react";
import "./StudentAdd.css";

function StudentAdd() {
    return (
        <div className="student__add">
            <div className="student_addContent">
                <div className="student__addOptions">
                    <div className="student_addOptionLine">
                        <span>Student ID:</span>
                        <input type="text" />
                    </div>

                    <div className="student_addOptionLine">
                        <span>Student First Name:</span>
                        <input type="text" />
                    </div>

                    <div className="student_addOptionLine">
                        <span>Student Last Name:</span>
                        <input type="text" />
                    </div>

                    <div className="student_addOptionLine">
                        <span>Enrolled Course ID:</span>
                        <input type="text" />
                    </div>

                    <div className="student_addOptionLine">
                        <span>Student Module Result:</span>
                        <input type="text" placeholder="CS5011 Result" />
                        <input type="text" placeholder="CS5012 Result" />
                        <input type="text" placeholder="CS5013 Result" />
                        <input type="text" placeholder="CS5014 Result" />
                    </div>

                    <div className="student_addButton">
                        <button className="style__button">Add Module</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentAdd;
