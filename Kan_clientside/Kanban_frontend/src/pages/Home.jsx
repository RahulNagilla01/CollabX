import React from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/Home.css";
import AuthForm from "./../components/AuthForm";

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <h1>Welcome to CollaborateX</h1>
            <div className="auth-buttons">
                <button onClick={() => navigate("/project")}>Sign In</button>
                <button onClick={() => navigate("/project")}>Sign Up</button>
            </div>
        </div>
    );
};

export default Home;
