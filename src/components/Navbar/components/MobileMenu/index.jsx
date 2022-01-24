import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "/src/assets/images/logos/MG-Logo.svg";
import "./index.scss";

const MobileMenu = ({ pages, activeMenu, MobileMenuHandler }) => {
  //   console.log(MobileMenuHandler);

  return (
    <div className={activeMenu ? "MobileMenu activeMenu" : "MobileMenu"}>
      <div className="close" onClick={MobileMenuHandler}></div>
      <img src={Logo} alt="" />
      <ul>
        {Object.values(pages).map(({ name, slug }, i) => (
          <li key={i} onClick={MobileMenuHandler}>
            <Link to={slug}>{name}</Link>
          </li>
        ))}
        {/* <li>
          <Link to="/contact-us#register" onClick={MobileMenuHandler}>Register</Link>
        </li> */}
      </ul>
    </div>
  );
};

export default MobileMenu;
