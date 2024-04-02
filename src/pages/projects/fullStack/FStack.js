import React from "react";
import "../featured/featured.css";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { FullStack as Fstack } from "../../../utils/ProjectsData.js";

const FStack = () => {
  const id = uuid();

  return (
    <>
      <div id="featured">
        <div className="container">
          <div
            className="featured-projects block"
          >
            {Fstack.length !== 0 ? (
              Fstack.map((project, index) => {
                const { _id } = project;
                return (
                  <div className="card" key={project._id}>
                    <span
                      className={
                        project.status !== "pending"
                          ? "bg-lime-300"
                          : "bg-orange-400"
                      }
                    >
                      {project.status}
                    </span>
                    <Link to={`/projectdetails/${_id}`}>
                      <div className="img-div">
                        <img src={project.pimg} alt="img" />
                      </div>
                    </Link>
                    <div className="data-div">
                      <h1>{project.title}</h1>
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
                          View
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
                );
              })
            ) : (
              <h1 className="text-2xl text-sky-800 text-center block">
                No Projects
              </h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FStack;
