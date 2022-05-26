import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "./img/icon.png";
// import { UserContext } from "./UserContext";
// import { logg } from "./Login";

function Header() {
    // const { user, setUser } = useContext(UserContext);

    return (
        <div className="header">
            <div className="header__content">
                <Link to="/students">
                    <img
                        className="header__logo"
                        src={logo}
                        alt="contains logo"
                    />
                </Link>

                <div className="space__maker" />

                <div className="header__option">
                    <Link to="/Register" style={{ textDecoration: "none" }}>
                        <span className="option__above">Hello</span>
                        <br />
                        <span className="option__below">User</span>
                        {/* added for useContext */}
                        {/* <pre color="white">{JSON.stringify(user, null, 2)}</pre> */}
                    </Link>

                    {/* {user ? (
                        <button
                            onClick={() =>
                                // call logout
                                setUser(null)
                            }
                        >
                            logout
                        </button>
                    ) : (
                        <button
                            onClick={async () => {
                                const user = await logg();
                                setUser(user);
                            }}
                        >
                            login
                        </button>
                    )} */}
                </div>
                <div className="header__option">
                    <Link to="/login">
                        <span className="option__above">Log Out</span>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
