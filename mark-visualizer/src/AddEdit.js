import React, { useState, useEffect } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./AddEdit.css";
import "./Sidebar.css";

const initialState = {
    s_id: "",
    s_fname: "",
    s_lname: "",
    s_batch: "",
    c_id: "",
};

export const AddEdit = () => {
    const [state, setState] = useState(initialState);

    // destructuring from state
    const { s_id, s_fname, s_lname, s_batch, c_id } = state;

    const history = useHistory();

    // for updating data
    const { id } = useParams();

    // run only after getting id
    useEffect(() => {
        axios
            .get(`http://localhost:5000/api/get/${id}`)
            .then((resp) => setState({ ...resp.data[0] }));
    }, [id]);

    // Handling Events
    const handleSubmit = (e) => {
        // prevent default behaviour of browser
        e.preventDefault();
        if (!s_id || !s_fname || !s_lname || !s_batch || !c_id) {
            // alert("Please provide values");
            toast.error("Please provide values");
        } else {
            // if id exists then update else post
            if (!id) {
                axios
                    .post("http://localhost:5000/api/post", {
                        s_id,
                        s_fname,
                        s_lname,
                        s_batch,
                        c_id,
                    })
                    // clear input fields after use submits the value
                    .then(() => {
                        setState({
                            s_id: "",
                            s_fname: "",
                            s_lname: "",
                            s_batch: "",
                            c_id: "",
                        });
                    })
                    // .catch((err) => toast.error(err.response.data));
                    .catch((err) => alert(err.response.data));
                // toast.success("Values Added Sucessfully");
                alert("Values Added Sucessfully");
            } else {
                axios
                    .put(`http://localhost:5000/api/update/${id}`, {
                        s_id,
                        s_fname,
                        s_lname,
                        s_batch,
                        c_id,
                    })
                    // clear input fields after use submits the value
                    .then(() => {
                        setState({
                            s_id: "",
                            s_fname: "",
                            s_lname: "",
                            s_batch: "",
                            c_id: "",
                        });
                    })
                    // .catch((err) => toast.error(err.response.data));
                    .catch((err) => alert(err.response.data));
                // toast.success("Values Added Sucessfully");
                alert("Values Updated Sucessfully");
            }

            setTimeout(() => history.push("/"), 500);
        }
    };

    const handleInputChange = (e) => {
        // destruct name and value
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
    };

    return (
        <div className="newStudent__Profile">
            <ToastContainer theme="dark" />

            <div className="sidebar">
                <div className="sidebar__content">
                    <Link to="/Page">
                        <div className="navbar__options">Student</div>
                    </Link>
                    <div className="navbar__options">Enrollment</div>
                    <div className="navbar__options">Leaderboard</div>
                    <div className="navbar__options">Analytics</div>
                    <div className="navbar__options">Setting</div>
                </div>
            </div>

            <div style={{ marginTop: "100px" }}>
                <form
                    style={{
                        margin: "auto",
                        padding: "15px",
                        maxWidth: "400px",
                        alignContent: "center",
                    }}
                    onSubmit={handleSubmit}
                >
                    <label htmlFor="s_id">Student ID</label>
                    <input
                        type="text"
                        name="s_id"
                        id="s_id"
                        placeholder="Your Name..."
                        value={s_id}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="s_fname">First Name</label>
                    <input
                        type="text"
                        name="s_fname"
                        id="s_fname"
                        placeholder="Your First Name..."
                        value={s_fname || ""}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="s_lname">Last Name</label>
                    <input
                        type="text"
                        name="s_lname"
                        id="s_lname"
                        placeholder="Your Last Name..."
                        value={s_lname || ""}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="s_batch">Batch</label>
                    <input
                        type="text"
                        name="s_batch"
                        id="s_batch"
                        placeholder="Your student batch..."
                        value={s_batch || ""}
                        onChange={handleInputChange}
                    />
                    <label htmlFor="c_id">Course ID</label>
                    <input
                        type="text"
                        name="c_id"
                        id="c_id"
                        placeholder="Your Course ID..."
                        value={c_id || ""}
                        onChange={handleInputChange}
                    />
                    <input type="submit" value={id ? "Update" : "save"} />
                    <Link to="/">
                        <input type="button" value="Go Back" />
                    </Link>
                </form>
            </div>
        </div>
    );
};
export default AddEdit;
