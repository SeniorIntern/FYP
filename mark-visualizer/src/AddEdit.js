import React, { useState, useEffect } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import "./AddEdit.css";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
    s_id: "",
    s_fname: "",
    s_fname: "",
    c_id: "",
    c_name: "",
};

export const AddEdit = () => {
    const [state, setState] = useState(initialState);

    // destructuring from state
    const { s_id, s_fname, s_lname, c_id, c_name } = state;

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
        if (!s_id || !s_fname || !s_lname || !c_id || !c_name) {
            // toast.error("Please provide values");
            alert("Please provide values");
        } else {
            // if id exists then update else post
            if (!id) {
                axios
                    .post("http://localhost:5000/api/post", {
                        s_id,
                        s_fname,
                        s_lname,
                        c_id,
                        c_name,
                    })
                    // clear input fields after use submits the value
                    .then(() => {
                        setState({
                            s_id: "",
                            s_fname: "",
                            s_lname: "",
                            c_id: "",
                            c_name: "",
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
                        c_id,
                        c_name,
                    })
                    // clear input fields after use submits the value
                    .then(() => {
                        setState({
                            s_id: "",
                            s_fname: "",
                            s_lname: "",
                            c_id: "",
                            c_name: "",
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
                <label htmlFor="c_id">Course ID</label>
                <input
                    type="text"
                    name="c_id"
                    id="c_id"
                    placeholder="Your Course ID..."
                    value={c_id || ""}
                    onChange={handleInputChange}
                />
                <label htmlFor="c_name">Course Name</label>
                <input
                    type="text"
                    name="c_name"
                    id="c_name"
                    placeholder="Your Course Name..."
                    value={c_name || ""}
                    onChange={handleInputChange}
                />
                <input type="submit" value={id ? "Update" : "save"} />
                <Link to="/">
                    <input type="button" value="Go Back" />
                </Link>
            </form>
        </div>
    );
};
export default AddEdit;
