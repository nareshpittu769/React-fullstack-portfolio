import React from "react";
import "./notfound.css";
import { useNavigate } from "react-router-dom";
import Notfoundimg from "../assets/Notfound.png";
const Notfound = () => {
  const navigate = useNavigate();

  return (
    <>
      <div id="notfound">
        <div className="container wrapper">
          <h1 className="notfound-data">
            <img src={Notfoundimg} alt="Not-Found" />
            Page Not Found
          </h1>
          <div>
            <button className="btn-mobile" onClick={() => navigate("/")}>
              Back to home
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notfound;
