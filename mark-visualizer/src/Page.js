import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Page.css";
import "./Sidebar.css";
// import { UserContext } from "./UserContext";
import { FcSearch } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Page = () => {
    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:5002/api/get");
        setData(response.data);
    };

    useEffect(() => {
        loadData();
    }, []);

    // const deleteContact = (id) => {
    //     if (window.confirm("Are you sure you want to delete?")) {
    //         axios.delete(`http://localhost:5002/api/remove/${id}`);
    //         alert("Sucessfully Deleted");
    //         setTimeout(() => loadData(), 500);
    //     }
    // };

    const text__style = {
        textDecoration: "none",
        color: "white",
    };

    const ico = {
        width: "36px",
        height: "auto",
        cursor: "pointer",
    };

    // user context message setup
    // const { user, setUser } = useContext(UserContext);
    /*
    toast.success("Welcome Nikhil", {
        position: "top-center",
        autoClose: 9000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    */
    return (
        <div className="student__page">
            {/* <ToastContainer /> */}
            {/* Side-Navbar */}
            <div className="sidebar">
                <Link to="/Page" style={text__style}>
                    <div className="navbar__options">Students</div>
                </Link>

                <Link to="/Programmes" style={text__style}>
                    <div className="navbar__options">Programs</div>
                </Link>
                <Link to="/Results" style={text__style}>
                    <div className="navbar__options">Results</div>
                </Link>
                <Link to="/Analytics" style={text__style}>
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
                <Link to="/Setting" style={text__style}>
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

                    <Link to="/addContact">
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

                <table className="styled-table">
                    <thead>
                        <tr>
                            <th style={{ textAlign: "center" }}>S.NO</th>
                            <th style={{ textAlign: "center" }}>Student ID</th>
                            <th style={{ textAlign: "center" }}>First Name</th>
                            <th style={{ textAlign: "center" }}>Last Name</th>
                            <th style={{ textAlign: "center" }}>Batch</th>
                            <th style={{ textAlign: "center" }}>Course ID</th>
                            <th style={{ textAlign: "center" }}>Year</th>
                            <th style={{ textAlign: "center" }}>Section</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((item, index) => {
                            return (
                                <tr key={item.id}>
                                    <th scope="row">{index + 1} </th>
                                    <td>{item.s_Id} </td>
                                    <td>{item.s_Fname} </td>
                                    <td>{item.s_Lname} </td>
                                    <td>{item.s_Batch} </td>
                                    <td>{item.c_Id} </td>
                                    <td>{item.Year} </td>
                                    <td>{item.Section} </td>
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

export default Page;
