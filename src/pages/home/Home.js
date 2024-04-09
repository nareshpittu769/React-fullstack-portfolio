import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import { v4 as uuid } from "uuid";
import { Featured } from "../../utils/ProjectsData.js";
import Title from "../../components/Title.js";
import Footer from "../../components/footer/Footer.js";
import Typewriter from "typewriter-effect";
import { Usercontext } from "../../App.js";

const Home = () => {
  const projects = Featured.slice(0, 6) || [];
  const { darkmode } = useContext(Usercontext);
  const id = uuid();
  return (
    <>
      <section id="home" className={darkmode ? "dark" : ""}>
        <div className="container wrapper">
          <div className="home-data">
            <h2 className="text-4xl">Hello There,</h2>
            <h1>I'm Naresh Chandragiri</h1>
            <h3 className="text-lg text-stone-800 mt-2 text-wrap">
              {
                <Typewriter
                  options={{
                    strings: [
                      "Full-Stack Developer !",
                      "MERN Stack Developer !",
                      "Python Programmer !",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 1,
                  }}
                />
              }
            </h3>
            <div>
              <Link to="/about" className="mt-8 inline sm:w-36">
                <button className="btn-mobile btn-desktop text-lg inline">
                  More About Me
                </button>
              </Link>
            </div>
          </div>
          <Title title="Featured Projects" />
          <div
            className="featured-projects "
            data-aos="zoom-out"
            data-aos-duration="800"
          >
            {projects.length !== 0 ? (
              projects.map((project) => (
                <div className="card" key={id}>
                  <span
                    className={
                      project.status !== "pending"
                        ? "bg-lime-300"
                        : "bg-orange-400"
                    }
                  >
                    {project.status}
                  </span>
                  <div className="img-div">
                    <img src={project.pimg} alt="img" />
                  </div>
                  <div className="data-div">
                    <h1 className="uppercase font-normal">{project.title}</h1>
                    <div className="technologies">
                      {project.techstack.map((tech) => (
                        <span key={id}>{tech}</span>
                      ))}
                    </div>
                    <div className="links">
                      <Link
                        to={project.livelink}
                        className="link"
                        target="_blank"
                      >
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                        Live
                      </Link>
                      <Link
                        to={project.gitlink}
                        className="link"
                        target="_blank"
                      >
                        <i className="fa-brands fa-github"></i>Github
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h1 className="text-xl text-center pb-8 text-slate-800">
                No Projects Listed
              </h1>
            )}
          </div>
        </div>

        <Footer />
      </section>
    </>
  );
};

export default Home;
