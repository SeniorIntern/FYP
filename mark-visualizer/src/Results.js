import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Results.css";
import "./Sidebar.css";

export const Results = () => {
    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:5002/smr/get");
        setData(response.data);
    };

    useEffect(() => {
        loadData();
    }, []);

    const deleteContact = (id) => {
        if (window.confirm("Are you sure you want to delete?")) {
            axios.delete(`http://localhost:5002/smr/remove/${id}`);
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
        <div className="result">
            <div className="sidebar">
                <div className="sidebar__content">
                    <Link to="/Page" style={text__style}>
                        <div className="navbar__options">Student</div>
                    </Link>
                    <Link to="/Programmes" style={text__style}>
                        <div className="navbar__options">Programmes</div>
                    </Link>
                    <Link to="/Results" style={text__style}>
                        <div className="navbar__options">Results</div>
                    </Link>
                    <Link to="/Analytics" style={text__style}>
                        <div className="navbar__options">Analytics</div>
                    </Link>
                    <Link to="/Page" style={text__style}>
                        <div className="navbar__options">Setting</div>
                    </Link>
                </div>
            </div>

            <div className="result__container">
                <h3 style={{ textAlign: "center" }}>
                    Students' Module Results
                </h3>

                <table className="styled-table">
                    <thead>
                        <tr>
                            <th style={{ textAlign: "center" }}>S.NO</th>
                            <th style={{ textAlign: "center" }}>Student ID</th>
                            <th style={{ textAlign: "center" }}>CC12</th>
                            <th style={{ textAlign: "center" }}>CC49</th>
                            <th style={{ textAlign: "center" }}>TG406</th>
                            <th style={{ textAlign: "center" }}>SG12</th>
                            <th style={{ textAlign: "center" }}>Average</th>
                            <th style={{ textAlign: "center" }}>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((item, index) => {
                            return (
                                <tr key={item.id}>
                                    <th scope="row">{index + 1} </th>
                                    <td>{item.s_Id} </td>
                                    <td>{item.CC12} </td>
                                    <td>{item.CC49} </td>
                                    <td>{item.TG406} </td>
                                    <td>{item.SG12} </td>
                                    <td>{item.Average} </td>

                                    <td>
                                        <Link to={`/update/${item.id}`}>
                                            <button>Edit</button>
                                        </Link>

                                        <button
                                            onClick={() =>
                                                deleteContact(item.id)
                                            }
                                        >
                                            Delete
                                        </button>

                                        <Link to={`/view/${item.id}`}>
                                            <button>View</button>
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

export default Results;
