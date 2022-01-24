import React from "react";
import { Link } from "react-router-dom";
import logo from "/src/assets/images/logos/MG-Logo.svg";
import "./index.scss";

const Footer = () => {
  const mapUrl =
    "https://www.google.com/maps/place/Canada+Post/@49.1569286,-122.7818938,18.02z/data=!4m9!1m2!2m1!1sFleetwood+Postal+Outlet+V4N+9E9!3m5!1s0x5485d0ae2b63f5ef:0x1d624d9b8f1bebb3!8m2!3d49.1569355!4d-122.7809679!15sCh9GbGVldHdvb2QgUG9zdGFsIE91dGxldCBWNE4gOUU5kgELcG9zdF9vZmZpY2U";
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
          <a target="_blank" href={mapUrl}>
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
