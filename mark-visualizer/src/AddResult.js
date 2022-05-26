import React, { useState, useEffect } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import axios from "axios";
import "./AddResult.css";
import "./Sidebar.css";
// import "./AddStudent.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
    s_Id: "",
    CC12: "",
    CC49: "",
    TG406: "",
    SG12: "",
    Average: "",
};

const text__style = {
    textDecoration: "none",
    color: "white",
};

export const AddResult = () => {
    const [state, setState] = useState(initialState);

    // destructuring from state
    const { s_Id, CC12, CC49, TG406, SG12, Average } = state;

    const history = useHistory();

    // for updating data
    const { id } = useParams();

    // run only after getting id
    useEffect(() => {
        axios
            .get(`http://localhost:5002/smr/get/${id}`)
            .then((resp) => setState({ ...resp.data[0] }));
    }, [id]);

    // Handling Events
    const handleSubmit = (e) => {
        // prevent default behaviour of browser
        e.preventDefault();
        if (!s_Id || !CC12 || !CC49 || !TG406 || !SG12 || !Average) {
            // alert("Please provide values");
            toast.error("Please provide values");
        } else {
            // if id exists then update else post
            if (!id) {
                axios
                    .post("http://localhost:5002/smr/post", {
                        s_Id,
                        CC12,
                        CC49,
                        TG406,
                        SG12,
                        Average,
                    })
                    // clear input fields after use submits the value
                    .then(() => {
                        setState({
                            s_Id: "",
                            CC12: "",
                            CC49: "",
                            TG406: "",
                            SG12: "",
                            Average: "",
                        });
                    })
                    .catch((err) => toast.error(err.response.data));
                // .catch((err) => alert(err.response.data));
                toast.success("Values Updated Sucessfully", {
                    position: "top-center",
                });
            } else {
                axios
                    .put(`http://localhost:5002/smr/update/${id}`, {
                        s_Id,
                        CC12,
                        CC49,
                        TG406,
                        SG12,
                        Average,
                    })
                    // clear input fields after use submits the value
                    .then(() => {
                        setState({
                            s_Id: "",
                            CC12: "",
                            CC49: "",
                            TG406: "",
                            SG12: "",
                            Average: "",
                        });
                    })
                    .catch((err) => toast.error(err.response.data));
                // .catch((err) => alert(err.response.data));

                toast.success("Result Added Sucessfully");
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
                    <div
                        className="navbar__options"
                        onClick={(event) =>
                            (window.location.href = "http://127.0.0.1:5000/")
                        }
                    >
                        Prediction
                    </div>
                </Link>
            </div>

            {/* student module result form*/}
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
                            name="CC12"
                            id="CC12"
                            placeholder="CC12 result"
                            value={CC12 || ""}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="CC49"
                            id="CC49"
                            placeholder="CC49 result"
                            value={CC49 || ""}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="TG406"
                            id="TG406"
                            placeholder="TG406 result"
                            value={TG406 || ""}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="SG12"
                            id="SG12"
                            placeholder="SG12 result"
                            value={SG12 || ""}
                            onChange={handleInputChange}
                        />
                        <input
                            type="text"
                            name="Average"
                            id="Average"
                            placeholder="Average result"
                            value={Average || ""}
                            onChange={handleInputChange}
                        />
                        <br />

                        <input
                            type="submit"
                            className="actionBtn"
                            value={id ? "Update" : "save"}
                        />

                        {/* <input
                            type="submit"
                            className="actionBtn"
                            value="save"
                        /> */}
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
export default AddResult;
