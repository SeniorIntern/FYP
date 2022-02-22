import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Table() {
    return (
        <BrowserRouter>
            <div>
                <ToastContainer position="top-center" />
                <h1>Hello Dev</h1>
            </div>
        </BrowserRouter>
    );
}

export default Table;
