import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="welcome-title">Welcome to TaskTracker</h1>
      <p className="welcome-text">
        Manage your daily tasks, keep track of progress and stay organized.
      </p>
      <div className="cta-section">
        <Link to="/tasks" className="cta-button">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Home;
