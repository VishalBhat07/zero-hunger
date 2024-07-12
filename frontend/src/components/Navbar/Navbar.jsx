// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="farm-fresh">
          <span className="farm-fresh">FarmFresh</span>
        </Link>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link">
            About Us
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/MarketPlace" className="nav-link">
            MarketPlace
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Logistics" className="nav-link">
            Logistics
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Resources" className="nav-link">
            Resources
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/Contact" className="nav-link">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
