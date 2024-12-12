import React from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  return (
    <nav className="navbar navbar-light bg-success">
      <div className="nav-brand">My Brand</div>
      <div className="nav-links">
        <Link to="/" className="navbar-link">
          Home
        </Link>
        <Link to="/register" className="navbar-link">
          Register
        </Link>
        <Link to="/login" className="navbar-link">
          Login
        </Link>
        <Link to="/places" className="navbar-link">
          Places
        </Link>
      </div>
    </nav>
  );
}

export default Header;
