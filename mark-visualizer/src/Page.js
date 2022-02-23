import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { toast, Toast } from "react-toastify";
// import { Toast } from "react-toastify/dist/components";
import axios from "axios";
import "./Page.css";

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

    return (
        <div style={{ marginTop: "150px" }}>
            <Link to="/addContact">
                <button className="btn btn-contact">Add contact</button>
            </Link>
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
                                        onClick={() => deleteContact(item.id)}
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
    );
};

export default Page;
