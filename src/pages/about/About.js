import React, { useState,useContext } from "react";
// import { Link } from "react-router-dom";
import "./about.css";
import Title from "../../components/Title.js";
import { skills, eduaction } from "../../utils/skills.js";
import Footer from "../../components/footer/Footer.js";
import Typewriter from "typewriter-effect";
import { Usercontext } from "../../App.js";

const About = () => {
  const [eduinx, seteduinx] = useState(0);
  const { darkmode } = useContext(Usercontext);

  return (
    <>
      <div id="about" className={darkmode ? "dark" : ""}>
        <div className="container wrapper pb-16">
          <div className="row1" data-aos="fade-right" data-aos-duration="2000">
            <div className="col1">
              <h2>My name is,</h2>
              <h1>
                <Typewriter
                  options={{
                    strings: ["Naresh Chandragiri"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <p className="text-lg tracking-wide">
                Hii there, <br /> I'm Naresh, I am a Front-End Web Developer and
                Python Programmer. <br /> I will create the responsive and user
                friendly sites and i'll do python Programming. Now I'm learning
                Back-End Development. I'm looking forword to be a Full Stack
                Developer
              </p>
            </div>
            <div className="col2 sm:hidden">
              <img src="" alt="" />
            </div>
          </div>
          <Title title="Skills" />
          <div className="row2">
            <div className="skills">
              {skills.map((skill, index) => (
                <span key={index}>{skill}</span>
              ))}
            </div>
          </div>
          <Title title="Education" />
          <div className="row3">
            <div className="col1">
              {eduaction.map((obj, inx) => (
                <span
                  key={inx}
                  style={
                    eduinx === inx
                      ? { outline: "2px solid #3a9ad6", outlineOffset: "3px" }
                      : { border: "" }
                  }
                  onClick={() => seteduinx(inx)}
                >
                  {obj.edu.degree}
                </span>
              ))}
            </div>
            <div className="col2">
              {
                <div className="card">
                  <h1 className="text-cyan-800 font-sans font-semibold tracking-wide mb-6 text-center ">
                    {eduaction[eduinx].edu.title}
                  </h1>
                  <p className="text-base font-serif">
                    {eduaction[eduinx].edu.stream}
                  </p>
                  <p className="text-base font-serif">
                    {eduaction[eduinx].edu.percentage}
                  </p>
                  <p className="text-base font-serif">
                    {eduaction[eduinx].edu.passedout}
                  </p>
                  <p className="text-base font-serif">
                    {eduaction[eduinx].edu.location}
                  </p>
                </div>
              }
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;
