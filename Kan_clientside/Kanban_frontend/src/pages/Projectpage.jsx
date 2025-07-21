import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../styles/ProjectPage.css";

const ProjectPage = () => {
    const [projectId, setProjectId] = useState("");
    const navigate = useNavigate();

    const handleJoin = () => {
        if (projectId.length === 8) {
            navigate(`/kanban?projectId=${projectId}`);
        } else {
            alert("Invalid Project ID. It must be 8 characters long.");
        }
    };

    const handleCreate = () => {
        const newProjectId = Math.random().toString(36).substring(2, 10).toUpperCase();
        alert(`New Project Created with ID: ${newProjectId}`);
        navigate(`/kanban?projectId=${newProjectId}`);
    };

    return (
        <div className="project-container">
            <h2>Enter or Create Project</h2>
            
            <input 
                type="text" 
                placeholder="Project ID" 
                value={projectId} 
                onChange={(e) => setProjectId(e.target.value)}
            />

            <div className="btn-group">
                <button onClick={handleJoin}>Join</button>
                <button onClick={handleCreate}>Create</button>
            </div>
        </div>
    );
};

export default ProjectPage;
