import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "./img/icon.png";

function Header() {
    return (
        <div className="header">
            <div className="header__content">
                <Link to="/">
                    <img className="header__logo" src={logo} alt="contains logo" />
                </Link>

                <div className="space__maker" />

                <div className="header__option">
                    <span className="option__above">Hello Guest</span>
                    <span className="option__below">Sign In</span>
                </div>

                <div className="header__option">
                    <span className="option__above">Your</span>
                    <span className="option__below">Profile</span>
                </div>
            </div>
        </div>
    );
}

export default Header;
