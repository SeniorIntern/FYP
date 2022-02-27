import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./View.css";

export const View = () => {
    const [user, setUser] = useState({});
    const { id } = useParams();

    // run only after getting id
    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/get/${id}`)
            .then((resp) => setUser({ ...resp.data[0] }));
    }, [id]);

    return (
        <div style={{ marginTop: "150px" }}>
            <div className="card">
                <div className="card-header">
                    <p>Student Details</p>
                </div>
                <div className="container">
                    <strong>ID:</strong>
                    <span>{id}</span>
                    <br />
                    <br />
                    <strong>Student ID:</strong>
                    <span>{user.s_id}</span>
                    <br />
                    <br />
                    <strong>Student First Name:</strong>
                    <span>{user.s_fname}</span>
                    <br />
                    <br />
                    <strong>Student Last Name:</strong>
                    <span>{user.s_fname}</span>
                    <br />
                    <br />
                    <strong>Course ID:</strong>
                    <span>{user.c_id}</span>
                    <br />
                    <br />
                    <strong>Course Name:</strong>
                    <span>{user.c_name}</span>
                    <br />
                    <br />
                    <Link to="/page">
                        <div className="btn btn-edit">Go Back</div>
                    </Link>
                </div>
            </div>
        </div>
    );
};
