import React from "react";
import "./../styles/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <p>CollaborateX © {new Date().getFullYear()}</p>
        </footer>
    );
};

export default Footer;
