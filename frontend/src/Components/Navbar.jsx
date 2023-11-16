import React from "react";
import { Link } from "react-router-dom"; // Assuming you are using React Router for navigation

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <Link to="/">Logo</Link>
        </div>
        <div className="nav-buttons">
          <Link to="/about">Add Entry</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
