import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
function Header() {
  return (
    <nav className="navbar">
      <div className="nav-brand">My Brand</div>
      <div className="nav-links">
        <ul>
          <a href="" className="nav-link">
            <li>
              <Link to="/">Home</Link>
            </li>
          </a>
          <a href="" className="nav-link">
            <li>
              <Link to="/register">Register</Link>
            </li>
          </a>
          <a href="" className="nav-link">
            <li>
              <Link to="/login">Login</Link>
            </li>
          </a>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
