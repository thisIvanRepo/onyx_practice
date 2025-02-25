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
      <div className="wrapper-logo">
        <a href="../index.html" className="logo">
          <svg className="logo-svg" width="74" height="74">
            <use href={`${icon}#icon-scissors-1`}></use>
          </svg>
          arber
        </a>
      </div>

      <ul className="nav-list">
        <li className={`nav-item ${active === "home" ? "active" : ""}`}>
          <a
            className="nav-link"
            href="#home"
            onClick={() => handleClick("home")}>
            Home
          </a>
        </li>
        <li className={`nav-item ${active === "about" ? "active" : ""}`}>
          <a
            className="nav-link"
            href="#about"
            onClick={() => handleClick("about")}>
            History
          </a>
        </li>
        <li className={`nav-item ${active === "services" ? "active" : ""}`}>
          <a
            className="nav-link"
            href="#services"
            onClick={() => handleClick("services")}>
            Services
          </a>
        </li>
        <li className={`nav-item ${active === "contact" ? "active" : ""}`}>
          <a
            className="nav-link"
            href="#contact"
            onClick={() => handleClick("contact")}>
            Gallery
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
