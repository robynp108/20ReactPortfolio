import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
    const location = useLocation();

    return (
        <ul className="nav nav-tabs" style={{backgroundColor: "#AED6F1"}}>
            <li className="nav-item">
                <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    Robyn Palmer - Home
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/portfolio"
                    className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
                >
                    Portfolio
                </Link>
            </li>
        </ul>
    );
}

export default Header;
