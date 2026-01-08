import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Task.css";

const API_URL = import.meta.env.VITE_API_URL;

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const loadTasks = async () => {
    const res = await axios.get(API_URL);
    setTasks(res.data);
    setLoading(false);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const deleteTask = async (id) => {
    if (!window.confirm("Delete this task?")) return;
    await axios.delete(`${API_URL}/${id}`);
    loadTasks();
  };

  const toggleTask = async (task) => {
    await axios.patch(`${API_URL}/${task._id}`, {
      completed: !task.completed
    });
    loadTasks();
  };

  const priorityOrder = {
    high: 1,
    medium: 2,
    low: 3
  };

  const sortedTasks = [...tasks].sort((a, b) => {
    if (priorityOrder[a.priority] !== priorityOrder[b.priority]) {
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    }
    return new Date(a.dueDate) - new Date(b.dueDate);
  });

  if (loading) {
    return <div className="loading">Loading tasks...</div>;
  }

  return (
    <div className="tasks-container">
      <div className="tasks-header">
        <h2>My Tasks</h2>
        <button className="add-btn" onClick={() => navigate("/tasks/add")}>
          Add Task
        </button>
      </div>

      <div className="task-list">
        {sortedTasks.length === 0 && (
          <p className="no-tasks">No tasks available</p>
        )}

        {sortedTasks.map((task) => (
          <div className={`task-item ${task.completed ? "completed" : ""}`} key={task._id}>
            <h3>{task.title}</h3>

            <p className="desc">{task.description}</p>

            <div className="meta">
              <span className={`priority ${task.priority}`}>
                {task.priority}
              </span>
              <span className="date">
                {task.dueDate
                  ? new Date(task.dueDate).toLocaleDateString()
                  : "No date"}
              </span>
            </div>

            <div className="task-actions">
              <button onClick={() => toggleTask(task)}>
                {task.completed ? "Undo" : "Done"}
              </button>

              <button onClick={() => navigate(`/tasks/add?edit=${task._id}`)}>
                Edit
              </button>

              <button onClick={() => deleteTask(task._id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;
