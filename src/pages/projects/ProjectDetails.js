import React, { useState, useContext } from "react";
import "./projectDetails.css";
import { Featured as projectdata } from "../../utils/ProjectsData.js";
import { Link, useParams } from "react-router-dom";
import Footer from "../../components/footer/Footer.js";
import { Usercontext } from "../../App.js";

const ProjectDetails = () => {
  const { proId } = useParams();
  const { darkmode } = useContext(Usercontext);

  const [img, setimg] = useState(projectdata[proId].pimg);
  // console.log(proId);
  return (
    <>
      <div id="projectdetails" className={darkmode ? "dark" : ""}>
        <div className="container wrapper">
          <div className="row1 ">
            <div className="col1 ">
              <div className="img-div">
                <img src={img} alt="" />
              </div>
              <div className="img-stack ">
                {projectdata[proId].pimgstack.map((obj, index) => (
                  <img
                    className="w-28"
                    src={obj}
                    alt=""
                    key={index}
                    onClick={() => setimg(obj)}
                  />
                ))}
              </div>
            </div>
            <div className="col2 ">
              <h1 className="block text-center text-2xl text-sky-500 font-bold tracking-wide underline decoration-2 underline-offset-8">
                Project Data
              </h1>
              <div className="data flex flex-col gap-3">
                <h1 className="text-zinc-900 text-3xl mt-8">
                  {projectdata[proId].title}
                </h1>
                <p>{projectdata[proId].discription}</p>
                <p className="text-amber-800 text-bold text-xl">
                  {" "}
                  {projectdata[proId].status}
                </p>

                <div className="link">
                  <Link
                    to={projectdata[proId].livelink}
                    className="hover:text-cyan-600"
                  >
                    Project Live{" "}
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                  </Link>
                </div>
                <div className="link">
                  <Link
                    to={projectdata[proId].gitlink}
                    className="hover:text-cyan-600"
                  >
                    Github Link{" "}
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                  </Link>
                </div>
                <div className="techstack flex gap-1 flex-wrap">
                  {projectdata[proId].techstack.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-neutral-300 p-2 rounded-sm font-mono"
                    >
                      {" "}
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="hr bg-slate-400 h-[2px]"></div>
                <div className="bt-data">
                  <p className="flex gap-2">
                    <h1 className="text-teal-950 tracking-wide font-semibold">
                      Project Name :
                    </h1>
                    <span>{projectdata[proId].title}</span>
                  </p>
                  <p className="flex gap-2">
                    <h1 className="text-teal-950 tracking-wide font-semibold">
                      Project ID :
                    </h1>
                    <span>{proId}</span>
                  </p>
                  <p className="flex gap-2">
                    <h1 className="text-teal-950 tracking-wide font-semibold">
                      Creator Name :
                    </h1>
                    <span>Naresh Chandragiri</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ProjectDetails;
