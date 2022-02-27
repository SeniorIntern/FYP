import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { toast, Toast } from "react-toastify";
// import { Toast } from "react-toastify/dist/components";
import axios from "axios";
import "./Page.css";
import "./Sidebar.css";

export const Page = () => {
    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:5000/api/get");
        setData(response.data);
    };

    useEffect(() => {
        loadData();
    }, []);

    const deleteContact = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            axios.delete(`http://localhost:5000/api/remove/${id}`);
            // toast.success("Contact deleted sucessfully");
            alert("Sucessfully Deleted");
            setTimeout(() => loadData(), 500);
        }
    };

    const text__style = {
        textDecoration: "none",
        color: "white",
    };

    return (
        <div className="student__page">
            <div className="sidebar">
                <div className="sidebar__content">
                    <Link to="/Page" style={text__style}>
                        <div className="navbar__options">Student</div>
                    </Link>
                    <Link to="/Programmes" style={text__style}>
                        <div className="navbar__options">Programmes</div>
                    </Link>
                    <Link to="/Page" style={text__style}>
                        <div className="navbar__options">Leaderboard</div>
                    </Link>
                    <Link to="/Page" style={text__style}>
                        <div className="navbar__options">Analytics</div>
                    </Link>
                    <Link to="/Page" style={text__style}>
                        <div className="navbar__options">Setting</div>
                    </Link>
                </div>
            </div>

            <div style={{ marginTop: "150px" }} className="page-container">
                <Link to="/addContact">
                    <button className="btn btn-contact">
                        Create New Profile
                    </button>
                </Link>
                <button className="btn btn-contact">Filter</button>
                <input type="text" placeholder="Student ID" />
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th style={{ textAlign: "center" }}>S.NO</th>
                            <th style={{ textAlign: "center" }}>Student ID</th>
                            <th style={{ textAlign: "center" }}>First Name</th>
                            <th style={{ textAlign: "center" }}>Last Name</th>
                            <th style={{ textAlign: "center" }}>Course ID</th>
                            <th style={{ textAlign: "center" }}>Course Name</th>
                            <th style={{ textAlign: "center" }}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => {
                            return (
                                <tr key={item.id}>
                                    <th scope="row">{index + 1} </th>
                                    <td>{item.s_id} </td>
                                    <td>{item.s_fname} </td>
                                    <td>{item.s_lname} </td>
                                    <td>{item.c_id} </td>
                                    <td>{item.c_name} </td>
                                    <td>
                                        <Link to={`/update/${item.id}`}>
                                            <button className="btn btn-edit">
                                                Edit
                                            </button>
                                        </Link>

                                        <button
                                            className="btn btn-delete"
                                            onClick={() =>
                                                deleteContact(item.id)
                                            }
                                        >
                                            Delete
                                        </button>

                                        <Link to={`/view/${item.id}`}>
                                            <button className="btn btn-view">
                                                View
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Page;
