import React from "react";
import "./Home.css";
import Sidebar from "./Sidebar";
import Student from "./Student";

function Home() {
    return (
        <div className="home">
            <Sidebar />
            <Student />
        </div>
    );
}

export default Home;
