import React, { useState } from "react";
import "./../styles/AuthForm.css";  // Import CSS for form styling
import axios from "axios";          // Import axios for AJAX calls

const AuthForm = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = isSignUp ? "http://localhost:8080/api/signup" : "http://localhost:8080/api/signin";
      const response = await axios.post(endpoint, formData);

      console.log("Response:", response.data);
      alert(`Successfully ${isSignUp ? "Signed Up" : "Signed In"}`);
    } catch (error) {
      console.error("Error:", error);
      alert("Error occurred. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <h1>{isSignUp ? "Sign Up" : "Sign In"}</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter username"
            required
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
            required
          />
        </div>

        <button type="submit">
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>

        <div className="toggle-link">
          <span onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
          </span>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
