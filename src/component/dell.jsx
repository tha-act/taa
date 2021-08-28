import React from "react";
import icon1 from "./img/icon.svg";
import base from "./img/base.png";
import orange2 from "./img/orange2.png";
import cow from "./img/cow.png";
const Dell = () => {
  return (
    <div className="dell">
      <img src={icon1} alt="" srcset="" />
      <p>CLOSED PROJECTS </p>
      <h2>Latest Projects List</h2>
      <div className="flex sa">
        <img className="img-sm"  src={orange2} alt="" />
        <img className="img-sm" src={cow} alt="" />
        <img className="img-sm" src={base} alt="" />
      </div>
    </div>
  );
};

export default Dell;
