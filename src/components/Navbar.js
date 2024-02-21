import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-component">
      <a className="navbar-logo" href="/">Car Gallery</a>
      <ul className="navbar">
        <a href="#featured">
          <li className="navbar-links">Featured</li>
        </a>
        <a href="#cars">
          <li className="navbar-links">Cars</li>
        </a>
        <a href="/">
          <li className="navbar-links">Contact</li>
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
