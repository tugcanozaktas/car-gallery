import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-component">
      <a className="navbar-logo" href="#">Car Gallery</a>
      <ul className="navbar">
        <a href="#">
          <li className="navbar-links">Home</li>
        </a>
        <a href="#">
          <li className="navbar-links">Cars</li>
        </a>
        <a href="#">
          <li className="navbar-links">Contact</li>
        </a>
        <a href="#">
          <li className="navbar-links">About</li>
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
