import React from "react";
import "./contact.css";
import contactimg from "../../../assets/phone-1439839_1280.png";
import Title from "../../../components/Title.js";
const Contact = () => {
  return (
    <>
      <div id="contact">
        <div className="container wrapper ">
          <Title title="Contact Me " />
          <div className="row1">
            <div className="img-div">
              <img src={contactimg} alt="contact-img" />
            </div>
            <div className="form">
              <form action="" className="form">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Enter your name"
                  required
                  className=""
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter Your Email"
                  required
                />
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  required
                  rows="6"
                  placeholder="Enter Your Messaage Here.."
                ></textarea>
                <div className="submit">
                  <button type="submit">Submit</button>
                  <button type="reset">Reset</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
