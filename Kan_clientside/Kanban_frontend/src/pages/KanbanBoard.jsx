import React, { useState } from "react";
import "./../styles/KanbanBoard.css";

const KanbanBoard = () => {
    const [tasks, setTasks] = useState({
        todo: ["Task 1", "Task 2"],
        inProgress: ["Task 3"],
        done: ["Task 4"]
    });

    const addTask = () => {
        const newTask = prompt("Enter new task:");
        if (newTask) {
            setTasks((prev) => ({
                ...prev,
                todo: [...prev.todo, newTask]
            }));
        }
    };

    return (
        <div className="kanban-container">
            <h1>Kanban Board</h1>
            
            <div className="kanban-columns">
                {/* TODO Column */}
                <div className="kanban-column">
                    <h3>TODO</h3>
                    <div className="task-list">
                        {tasks.todo.map((task, index) => (
                            <div key={index} className="task">{task}</div>
                        ))}
                    </div>
                    <button onClick={addTask}>+ Add Task</button>
                </div>

                {/* IN PROGRESS Column */}
                <div className="kanban-column">
                    <h3>IN PROGRESS</h3>
                    <div className="task-list">
                        {tasks.inProgress.map((task, index) => (
                            <div key={index} className="task">{task}</div>
                        ))}
                    </div>
                </div>

                {/* DONE Column */}
                <div className="kanban-column">
                    <h3>DONE</h3>
                    <div className="task-list">
                        {tasks.done.map((task, index) => (
                            <div key={index} className="task">{task}</div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KanbanBoard;
