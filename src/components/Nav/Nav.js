import React, { useState } from "react";
import "./Nav.css";
import icon from "../../images/icons.svg";

function Nav() {
  const [active, setActive] = useState("home");

  const handleClick = (section) => {
    switch (section) {
      case "home":
        setActive("home");
        break;
      case "about":
        setActive("about");
        break;
      case "services":
        setActive("services");
        break;
      case "contact":
        setActive("contact");
        break;
      default:
        setActive("home");
    }
  };

  return (
    <nav className="header-nav">
      <a href="../index.html" className="logo">
        <svg className="logo-svg" width="74" height="74">
          <use href={`${icon}#icon-scissors-1`}></use>
        </svg>
        <span className="logo-text">arber</span>
      </a>
      <ul className="nav-list">
        <li className={`nav-item ${active === "home" ? "active" : ""}`}>
          <a href="#home" onClick={() => handleClick("home")}>
            Home
          </a>
        </li>
        <li className={`nav-item ${active === "about" ? "active" : ""}`}>
          <a href="#about" onClick={() => handleClick("about")}>
            About
          </a>
        </li>
        <li className={`nav-item ${active === "services" ? "active" : ""}`}>
          <a href="#services" onClick={() => handleClick("services")}>
            Services
          </a>
        </li>
        <li className={`nav-item ${active === "contact" ? "active" : ""}`}>
          <a href="#contact" onClick={() => handleClick("contact")}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
