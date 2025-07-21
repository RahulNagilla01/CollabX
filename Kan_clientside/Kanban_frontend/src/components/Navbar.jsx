import React from "react";
import { Link } from "react-router-dom";
import "./../styles/Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>CollaborateX</h1>
            <div>
                <Link to="/">Home</Link>
                <Link to="/project">Projects</Link>
                <Link to="/kanban">Kanban Board</Link>
            </div>
        </nav>
    );
};

export default Navbar;
