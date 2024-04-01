import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./footer.css";
const Footer = () => {
  const handleClick = () => {};
  return (
    <>
      <div id="footer">
        <div className="container wrapper">
          <div className="navlinks">
            <NavLink className="navlink" to="/" onClick={handleClick}>
              Home
            </NavLink>
            <NavLink className="navlink" to="/about" onClick={handleClick}>
              About
            </NavLink>
            <NavLink className="navlink" to="/experience" onClick={handleClick}>
              Experience
            </NavLink>
            <NavLink className="navlink" to="/projects" onClick={handleClick}>
              Projects
            </NavLink>
          </div>
          <div className="social-links">
            <Link
              className="link"
              target="_blank"
              to="https://www.instagram.com/mrpittu__/"
              onClick={handleClick}
            >
              <i class="fa-brands fa-instagram"></i>
            </Link>
            <Link
              className="link"
              target="_blank"
              to="https://github.com/nareshpittu769/"
              onClick={handleClick}
            >
              <i class="fa-brands fa-github"></i>
            </Link>
            <Link
              className="link"
              to="/projects"
              target="_blank"
              onClick={(e) => {
                window.location.href = "mailto:nareshpittu769@gmail.com";
              }}
            >
              <i class="fa-solid fa-envelope"></i>
            </Link>
            <Link
              className="link"
              target="_blank"
              to="www.linkedin.com/in/nareshpittu769"
            >
              <i class="fa-brands fa-linkedin"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
