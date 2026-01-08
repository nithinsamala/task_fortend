import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <h1 className="home-title">Task Tracker</h1>
      <p className="home-text">
        Manage your daily tasks, track progress and stay organized.
      </p>
      <Link to="/tasks" className="home-btn">
        Get Started
      </Link>
    </div>
  );
};

export default Home;
