import React, { useContext } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import authimg from "../../assets/authimg.svg";
import { useAuth0 } from "@auth0/auth0-react";
import Footer from "../../components/footer/Footer.js";
import { Usercontext } from "../../App.js";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  const { darkmode } = useContext(Usercontext);
  

  return (
    <>
      <div id="login" className={darkmode ? "dark" : ""}>
        <div className="container wrapper">
          <div className="row1">
            <div className="img-div">
              <img src={authimg} alt="authimg" />
            </div>
            <Link
              className="button mb-8"
              onClick={() => {
                loginWithRedirect();
              }}
            >
              Login/Register <i className="fa-solid fa-right-to-bracket"></i>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Login;
