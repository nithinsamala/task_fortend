import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Tasks.css";

const API_URL = import.meta.env.VITE_API_URL;

const Tasks = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadTasks = async () => {
    const res = await axios.get(API_URL);
    setList(res.data);
    setLoading(false);
  };

  const toggleTask = async (task) => {
    await axios.patch(`${API_URL}/${task._id}`, {
      completed: !task.completed
    });
    loadTasks();
  };

  const removeTask = async (id) => {
    await axios.delete(`${API_URL}/${id}`);
    loadTasks();
  };

  useEffect(() => {
    loadTasks();
  }, []);

  if (loading) {
    return <p className="page-msg">Loading...</p>;
  }

  return (
    <div className="tasks">
      {list.map((task) => (
        <div key={task._id} className="task">
          <div>
            <h3 className={task.completed ? "done" : ""}>{task.title}</h3>
            <p>{task.description}</p>
          </div>

          <div className="task-actions">
            <button onClick={() => toggleTask(task)}>
              {task.completed ? "Undo" : "Done"}
            </button>
            <button onClick={() => removeTask(task._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
