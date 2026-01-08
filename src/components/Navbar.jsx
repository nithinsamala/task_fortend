import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="nav">
      <div className="nav-inner">
        <div className="nav-brand" onClick={() => navigate("/")}>
          TaskTracker
        </div>

        <div className="nav-links">
          <NavLink to="/" end className="nav-link">
            Home
          </NavLink>
          <NavLink to="/tasks" className="nav-link">
            Tasks
          </NavLink>
          <NavLink to="/tasks/add" className="nav-link">
            Add
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
