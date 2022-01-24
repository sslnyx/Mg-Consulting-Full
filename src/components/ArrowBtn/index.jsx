import React from "react";
import arrowImg from "/src/assets/images/icons/arrow.svg";
import "./index.scss"

const ArrowBtn = ({ children }) => {
  return (
    <div className="arrowBtn">
      {children}
      <img src={arrowImg} />
    </div>
  );
};

export default ArrowBtn;
