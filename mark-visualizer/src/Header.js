import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "./img/icon.png";

function Header() {
    return (
        <div className="header">
            <div className="header__content">
                <Link to="/page">
                    <img
                        className="header__logo"
                        src={logo}
                        alt="contains logo"
                    />
                </Link>

                <div className="space__maker" />

                <div className="header__option">
                    <Link to="/Register" style={{ textDecoration: "none" }}>
                        <span className="option__above">Hello Guest</span>
                        <br />
                        <span className="option__below">Sign In</span>
                    </Link>
                </div>
                <div className="header__option">
                    <span className="option__above">Log Out</span>
                </div>
            </div>
        </div>
    );
}

export default Header;
