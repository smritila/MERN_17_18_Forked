import React from "react";
import "../styles/Header.css";
function Header() {
  return (
    <nav className="navbar">
      <div className="nav-brand">My Brand</div>
      <div className="nav-links">
        <a href="" className="nav-link">
          Home
        </a>
        <a href="" className="nav-link">
          Register
        </a>
        <a href="" className="nav-link">
          Login
        </a>
      </div>
    </nav>
  );
}

export default Header;
