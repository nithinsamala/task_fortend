import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1 className="welcome-title">Welcome to TaskTracker</h1>

      <p className="welcome-text">
        A simple app to manage your daily tasks and stay organized.
      </p>

      <Link to="/tasks" className="cta-button">
        Get Started
      </Link>
    </div>
  );
}

export default Home;
