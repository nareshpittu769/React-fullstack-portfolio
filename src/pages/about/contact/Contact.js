import React, { useState, useRef } from "react";
import "./contact.css";
import contactimg from "../../../assets/phone-1439839_1280.png";
import Title from "../../../components/Title.js";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_n7tz236", "template_n0qwxqu", form.current, {
        publicKey: "TtxcE7R3ptfYFK8MK",
      })
      .then(
        (res) => {
          console.log("SUCCESS!");
          console.log(res.message);
          toast.success("Message sent")
          setName('')
          setEmail('')
          setMessage('')
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.success("Message not sent")
        }
      );
  };

  // const handleSubmit = (e) => {
  //   if (!name || !email || !message) {
  //     toast.error("Details not submited");
  //   } else {
  //     toast.success("Details submited");
  //   }
  //   setName("");
  //   setEmail("");
  //   setMessage("");

  //   e.preventDefault();
  // };

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
              <form className="form" ref={form} onSubmit={sendEmail}>
                <input
                  type="text"
                  name="from_name"
                  value={name}
                  id="name"
                  placeholder="Enter your name"
                  required
                  className=""
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  name="from_email"
                  id="email"
                  value={email}
                  placeholder="Enter Your Email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                  name="message"
                  id="message"
                  cols="30"
                  required
                  value={message}
                  rows="6"
                  placeholder="Enter Your Messaage Here.."
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <div className="submit">
                  <input type="submit" value="Submit" style={{cursor:"pointer"}} />

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
