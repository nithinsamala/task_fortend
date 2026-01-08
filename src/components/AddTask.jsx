import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "./AddTask.css";

const API_URL = import.meta.env.VITE_API_URL;

function AddTask() {
  const navigate = useNavigate();
  const location = useLocation();

  const params = new URLSearchParams(location.search);
  const taskId = params.get("edit");

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "medium",
    dueDate: "",
    completed: false
  });

  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (taskId) {
      fetchTask();
    }
  }, [taskId]);

  const fetchTask = async () => {
    try {
      setFetching(true);
      const res = await axios.get(`${API_URL}/${taskId}`);
      setFormData({
        title: res.data.title || "",
        description: res.data.description || "",
        priority: res.data.priority || "medium",
        dueDate: res.data.dueDate ? res.data.dueDate.slice(0, 10) : "",
        completed: res.data.completed || false
      });
    } catch (err) {
      setError("Failed to load task");
    } finally {
      setFetching(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (taskId) {
        await axios.patch(`${API_URL}/${taskId}`, formData);
      } else {
        await axios.post(API_URL, formData);
      }
      navigate("/tasks");
    } catch (err) {
      setError("Failed to save task");
    } finally {
      setLoading(false);
    }
  };

  if (fetching) {
    return (
      <div className="add-task-container">
        <div className="add-task-card">
          Loading...
        </div>
      </div>
    );
  }

  return (
    <div className="add-task-container">
      <div className="add-task-card">
        <h2 className="add-task-title">
          {taskId ? "Edit Task" : "Add Task"}
        </h2>

        {error && <div className="form-error">{error}</div>}

        <form onSubmit={handleSubmit} className="add-task-form">
          <div className="form-group">
            <label className="form-label">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Description</label>
            <textarea name="description" value={formData.description}
              onChange={handleChange}
              className="form-textarea"
            />
          </div>

          <div className="form-group">
            <label className="form-label">Priority</label>
            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className="form-input"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label">Due Date</label>
            <input
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              required
              className="form-input"
            />
          </div>
          <div className="form-group">
          <label className="form-label">
              <input type="checkbox"
                name="completed"
                checked={formData.completed}
                onChange={handleChange}
              />
              Completed
            </label>
          </div>

          <div className="form-actions">
            <button
              type="button"
              className="btn-cancel"
              onClick={() => navigate("/tasks")}
              disabled={loading}
            >
              Cancel
            </button>

            <button type="submit" className="btn-submit" disabled={loading}>
              {taskId ? "Update Task" : "Add Task"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddTask;
