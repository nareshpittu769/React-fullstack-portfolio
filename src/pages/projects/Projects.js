import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import "./project.css";
// import { v4 as uuid } from "uuid";
import Title from "../../components/Title.js";
import Footer from "../../components/footer/Footer.js";
import { Usercontext } from "../../App.js";
// import Skeleton from "../../components/navbar/Skeleton.js";

const Projects = () => {
  // const id = uuid();
  const { darkmode } = useContext(Usercontext);

  return (
    <>
      <div id="projects" className={darkmode ? "dark" : ""}>
        <div className="container wrapper">
          <Title title="Projects" />
          <div className="row1 ">
            <nav className="nested-nav">
              <Link
                className="text-sky-700 bg-cyan-100  p-2 rounded-md  link underline decoration-solid underline-offset-2"
                to="/projects/featured"
              >
                Front-End Projects
              </Link>
              <Link
                className="text-sky-700 bg-cyan-100  p-2 rounded-md link  underline decoration-solid underline-offset-2"
                to="/projects/fstack"
              >
                Full-Stack Projects
              </Link>
            </nav>
            <div className="div" data-aos="zoom-in" data-aos-duration="800">
              <Outlet />
            </div>
          </div>
        </div>
        {/* <Skeleton /> */}
        <Footer />
      </div>
    </>
  );
};

export default Projects;
