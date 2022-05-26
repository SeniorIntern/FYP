import React, { useState, useEffect } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import axios from "axios";
import "./AddEdit.css";
import "./Sidebar.css";
// import "./AddStudent.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
    s_Id: "",
    s_Fname: "",
    s_Lname: "",
    s_Batch: "",
    c_Id: "",
    Year: "",
    Section: "",
};

const text__style = {
    textDecoration: "none",
    color: "white",
};

export const AddEdit = () => {
    const [state, setState] = useState(initialState);

    // destructuring from state
    const { s_Id, s_Fname, s_Lname, s_Batch, c_Id, Year, Section } = state;

    const history = useHistory();

    // for updating data
    const { id } = useParams();

    // run only after getting id
    useEffect(() => {
        axios
            .get(`http://localhost:5002/api/get/${id}`)
            .then((resp) => setState({ ...resp.data[0] }));
    }, [id]);

    // Handling Events
    const handleSubmit = (e) => {
        // prevent default behaviour of browser
        e.preventDefault();
        if (
            !s_Id ||
            !s_Fname ||
            !s_Lname ||
            !s_Batch ||
            !c_Id ||
            !Year ||
            !Section
        ) {
            // alert("Please provide values");
            toast.error("Please provide values");
        } else {
            // if id exists then update else post
            if (!id) {
                axios
                    .post("http://localhost:5002/api/post", {
                        s_Id,
                        s_Fname,
                        s_Lname,
                        s_Batch,
                        c_Id,
                        Year,
                        Section,
                    })
                    // clear input fields after use submits the value
                    .then(() => {
                        setState({
                            s_Id: "",
                            s_Fname: "",
                            s_Lname: "",
                            s_Batch: "",
                            c_Id: "",
                            Year: "",
                            Section: "",
                        });
                    })
                    .catch((err) => toast.error(err.response.data));
                // .catch((err) => alert(err.response.data));
                toast.success("Student Added Sucessfully", {
                    position: "top-center",
                });
            } else {
                axios
                    .put(`http://localhost:5002/api/update/${id}`, {
                        s_Id,
                        s_Fname,
                        s_Lname,
                        s_Batch,
                        c_Id,
                        Year,
                        Section,
                    })
                    // clear input fields after use submits the value
                    .then(() => {
                        setState({
                            s_Id: "",
                            s_Fname: "",
                            s_Lname: "",
                            s_Batch: "",
                            c_Id: "",
                            Year: "",
                            Section: "",
                        });
                    })
                    .catch((err) => toast.error(err.response.data));
                // .catch((err) => alert(err.response.data));

                toast.success("Student Added Sucessfully");
            }

            // redirect to student page after 500ms
            // setTimeout(() => history.push("/"), 500);
        }
    };

    const handleInputChange = (e) => {
        // destruct name and value
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    // const errNoti = () => {
    //     toast.warn("Student with that Id already exists!");
    // };

    return (
        <div className="newStudent__Profile">
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
            <div className="addForm__sidebar">
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
                                "http://127.0.0.1:5500/visualization/lineChart.html")
                        }
                    >
                        Analytics
                    </div>
                </Link>
                <Link to="/prediction" style={text__style}>
                    <div className="navbar__options">prediction</div>
                </Link>
            </div>

            {/* student form */}
            <div className="page__container">
                {/* <ToastContainer theme="dark" /> */}
                <div>
                    <form
                        style={{
                            padding: "15px",
                            maxWidth: "400px",
                            alignContent: "center",
                            textAlign: "center",
                        }}
                        onSubmit={handleSubmit}
                    >
                        <input
                            type="text"
                            name="s_Id"
                            id="s_Id"
                            placeholder="Student ID"
                            e={s_Id}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="s_Fname"
                            id="s_Fname"
                            placeholder="Student First Name"
                            value={s_Fname || ""}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="s_Lname"
                            id="s_Lname"
                            placeholder="Student Last Name"
                            value={s_Lname || ""}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="s_Batch"
                            id="s_Batch"
                            placeholder="Student Batch"
                            value={s_Batch || ""}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="c_Id"
                            id="c_Id"
                            placeholder="Student Course ID"
                            value={c_Id || ""}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="Year"
                            id="Year"
                            placeholder="Student Year"
                            value={Year || ""}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="Section"
                            id="Section"
                            placeholder="Student Section"
                            value={Section || ""}
                            onChange={handleInputChange}
                        />
                        <br />
                        {/* 
                        <input
                            type="submit"
                            className="actionBtn"
                            value={id ? "Update" : "save"}
                        />
 */}
                        <input
                            type="submit"
                            className="actionBtn"
                            value="save"
                        />
                        <br />
                        <Link to="/students">
                            <input type="button" value="Go Back" />
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default AddEdit;
