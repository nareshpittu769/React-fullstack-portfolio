import React, { useState, useContext } from "react";
import "./navbar.css";
import logo from "../../assets/icons8-graduation-hat-64.png";
import { NavLink, Link } from "react-router-dom";
import { IoMdSunny, IoMdMoon } from "react-icons/io";
import { useAuth0 } from "@auth0/auth0-react";
import { Usercontext } from "../../App.js";

const Navbar = () => {
  let [show, setShow] = useState(false);
  const { darkmode, setdarkmode } = useContext(Usercontext);
  console.log(darkmode);
  let [logclick, setlogclick] = useState(false);
  const { isAuthenticated, logout, user } = useAuth0();
  const handlemode = () => {
    setdarkmode(!darkmode);
  };
  const handleClick = () => {
    setShow(!show);
  };
  const handlelog = () => {
    setlogclick(!logclick);
  };
  const styles = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "#3A9AD6" : "",
      color: isActive ? "white" : "",
    };
  };

  return (
    <>
      <nav id="navbar">
        <div className="containerr mx-auto wrapper">
          <div className="logo-div">
            <div>
              <Link to="/" style={{ display: "inline-block" }}>
                <img src={logo} alt="" />
              </Link>
            </div>
            <i className="fa-solid fa-bars" onClick={handleClick}></i>
          </div>
          <aside
            className={show ? "navlinks-container show" : "navlinks-container"}
          >
            <div className="navlinks">
              <i className="fa-solid fa-xmark" onClick={handleClick}></i>
              <NavLink
                className="navlink"
                style={styles}
                to="/"
                onClick={handleClick}
              >
                Home
              </NavLink>
              <NavLink
                className="navlink"
                style={styles}
                to="/about"
                onClick={handleClick}
              >
                About
              </NavLink>
              <NavLink
                className="navlink"
                style={styles}
                to="/experience"
                onClick={handleClick}
              >
                Experience
              </NavLink>
              <NavLink
                className="navlink"
                style={styles}
                to="/projects"
                onClick={handleClick}
              >
                Projects
              </NavLink>
              <Link className="mode">
                <button onClick={handlemode}>
                  <span>
                    {darkmode ? (
                      <IoMdSunny
                        style={{ color: "#F6CDB4", fontSize: "20px" }}
                      />
                    ) : (
                      <IoMdMoon
                        style={{ color: "#F6CDB4", fontSize: "20px" }}
                      />
                    )}
                  </span>
                </button>
              </Link>
              {isAuthenticated ? (
                <NavLink
                  className="navlink"
                  style={styles}
                  to=""
                  onClick={() =>
                    logout({
                      logoutParams: { returnTo: window.location.origin },
                    })
                  }
                >
                  Logout
                </NavLink>
              ) : (
                <NavLink
                  className="navlink"
                  style={styles}
                  to="/login"
                  onClick={handleClick}
                >
                  Login
                </NavLink>
              )}
            </div>
          </aside>
          <div className="navlinks-container-desktop">
            <div className="navlinks">
              <NavLink
                className="navlink"
                style={styles}
                to="/"
                onClick={handleClick}
              >
                Home
              </NavLink>
              <NavLink
                className="navlink"
                style={styles}
                to="/about"
                onClick={handleClick}
              >
                About
              </NavLink>
              <NavLink
                className="navlink"
                style={styles}
                to="/experience"
                onClick={handleClick}
              >
                Experience
              </NavLink>
              <NavLink
                className="navlink"
                style={styles}
                to="/projects"
                onClick={handleClick}
              >
                Projects
              </NavLink>
              <Link className="mode">
                <button onClick={handlemode}>
                  <span>
                    {darkmode ? (
                      <IoMdSunny
                        style={{ color: "#F6CDB4", fontSize: "20px" }}
                      />
                    ) : (
                      <IoMdMoon
                        style={{ color: "#F6CDB4", fontSize: "20px" }}
                      />
                    )}
                  </span>
                </button>
              </Link>
              {isAuthenticated ? (
                // <NavLink
                //   className="navlink"
                //   style={styles}
                //   to=""
                //   title={user.name}
                //   onClick={() =>
                //     logout({
                //       logoutParams: { returnTo: window.location.origin },
                //     })
                //   }
                // >
                //   Logout
                // </NavLink>
                <div className="dropdown" onClick={handlelog}>
                  <img
                    src={user.picture}
                    alt="userpicture"
                    className="userpicture min-w-6 w-8 rounded-full outline outline-offset-4 outline-sky-400 cursor-pointer"
                  />
                  <div
                    className={
                      logclick ? "dropdown-content-block" : "dropdown-content"
                    }
                  >
                    <Link to="/profile">Profile</Link>
                    <Link
                      onClick={() => {
                        logout({
                          logoutParams: { returnTo: window.location.origin },
                        });
                        alert(`${user.name} loggedout`);
                      }}
                    >
                      Logout
                    </Link>
                  </div>
                </div>
              ) : (
                <NavLink
                  className="navlink"
                  style={styles}
                  to="/login"
                  onClick={handleClick}
                >
                  Login
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
