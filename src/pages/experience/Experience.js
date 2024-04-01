import React, { useState,useContext } from "react";
import "./experience.css";
import exper from "../../utils/experience.js";
import Title from "../../components/Title.js";
import Footer from "../../components/footer/Footer.js";
import { Usercontext } from "../../App.js";


const Experience = () => {
  const [select, setSelect] = useState(0);
  const { darkmode, setdarkmode } = useContext(Usercontext);

  return (
    <>
      <div id="experience" className={darkmode ? "dark" : ""}>
        <div className="container wrapper">
          <Title title="Experience" />
          {exper.length === 0 ? (
            <h1 className="text-3xl text-center">I'm a Fresher</h1>
          ) : (
            <div className="row1">
              <div className="col1">
                {exper.map((obj, index) => (
                  <span
                    style={
                      select === index
                        ? { outline: "2px solid #3a9ad6", outlineOffset: "3px" }
                        : { border: "" }
                    }
                    onClick={() => setSelect(index)}
                    key={index}
                  >
                    {obj.exp.timePeriod}
                  </span>
                ))}
              </div>
              <div
                className="col2"
                data-aos="flip-left"
                data-aos-duration="900"
              >
                {
                  <div className="card text-wrap">
                    <h1 className="text-orange-500 font-bold tracking-wider">
                      {exper[select].exp.company}
                    </h1>
                    <h1 className="text-sky-500 font-medium">
                      {exper[select].exp.role}
                    </h1>
                    <p>{exper[select].exp.discription}</p>
                    <h1>{exper[select].exp.location}</h1>
                  </div>
                }
              </div>
            </div>
          )}
        </div>
        <Footer />
      </div>
      
    </>
  );
};

export default Experience;
