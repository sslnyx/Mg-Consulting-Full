import React from "react";
import { Link } from "react-router-dom";
import logo from "/src/assets/images/logos/MG-Logo.svg";
import "./index.scss";

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo-wrapper d-flex align-items-center">
        <Link to="/#">
          <img className="footer-logo" src={logo} alt="" />
        </Link>
      </div>
      <div className="content-w bg-blue d-flex justify-content-center justify-content-md-between">
        <div></div>
        <div className="contact-wrapper">
          <a target="_blank" href="tel:604.396.4191">
            604.396.4191
          </a>{" "}
          |{" "}
          <a target="_blank" href="mailto:gd@mgconsulting.one">
            gd@mgconsulting.one
          </a>
          <br />
          <a
            target="_blank"
            href="https://www.google.com/maps/search/PO+Box+35035,+RPO+Fleetwood+Postal+Outlet+/@49.1640841,-122.8044667,15z/data=!3m1!4b1"
          >
            PO Box 35035, RPO Fleetwood Postal Outlet
            <br />
            Surrey, BC Canada V4N 9E9
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
