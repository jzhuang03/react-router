import React from "react";
import { Link } from "react-router-dom";

export const Root = () => {
  return (
    <nav>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};
