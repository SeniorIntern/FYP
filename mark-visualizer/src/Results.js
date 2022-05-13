import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Results.css";
import "./Sidebar.css";
// import { UserContext } from "./UserContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import editIco from "./img/edit.png";
import delIco from "./img/delete.png";
import { FcSearch } from "react-icons/fc";

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
            toast.warning("Deleted sucessfully");
            // alert("Sucessfully Deleted");
            setTimeout(() => loadData(), 500);
        }
    };

    const text__style = {
        textDecoration: "none",
        color: "white",
    };

    const ico = {
        width: "36px",
        height: "auto",
        cursor: "pointer",
    };

    return (
        <div className="result">
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

            <div className="result__container">
                <div className="table__options">
                    <input
                        type="text"
                        placeholder="Student ID"
                        style={{ width: "fit-content" }}
                    />
                    <FcSearch style={ico} />

                    <Link to="/addResult">
                        <button className="page_btn">Add Result</button>
                    </Link>
                    {/* 
                    <Link>
                        <button className="page_btn">Filter</button>
                    </Link> */}
                </div>
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
                                        <Link to={`/smr/update/${item.id}`}>
                                            <img
                                                src={editIco}
                                                className="imgStyle"
                                                alt=""
                                            />
                                        </Link>

                                        {/* <button
                                            onClick={() =>
                                                deleteContact(item.id)
                                            }
                                        >
                                            Delete
                                        </button> */}
                                        <img
                                            className="imgStyle"
                                            src={delIco}
                                            onClick={() =>
                                                deleteContact(item.id)
                                            }
                                            alt=""
                                        />
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <p style={{ color: "blue", textAlign: "right" }}>1,2,3,..8</p>
            </div>
        </div>
    );
};

export default Results;
