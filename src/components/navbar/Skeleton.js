import React from "react";
import "./skeleton.css";
import slow from "../../assets/InternetSlowdown_Day.gif";
const Skeleton = () => {
  return (
    <>
      <div className="card w-full h-80 bg-slate-200 flex justify-center">
        <div className="w-1/2">
          <div className="img-div  relative">
            <img src={slow} alt="img" className="absolute h-full w-full" />
          </div>
          <div className="data-div h-4 bg-slate-300 mb-2 rounded-sm"></div>
          <div className="technologies h-3 bg-slate-300 mb-2 rounded-sm"></div>
          <div className="links h-3 bg-slate-300 w-full mb-2 rounded-sm"></div>
        </div>
      </div>
    </>
  );
};

export default Skeleton;
