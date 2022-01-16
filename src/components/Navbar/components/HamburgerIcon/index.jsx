import React from "react";
import "./index.scss";

const HamburgerIcon = ({ MobileMenuHandler }) => {
  // console.log(MobileMenuHandler)
  return (
    <div className="hamburger" onClick={MobileMenuHandler}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default HamburgerIcon;
