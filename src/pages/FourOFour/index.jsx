import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const FourOFour = () => {
  return (
    <div className="page-404 d-flex align-items-center justify-content-center">
      <div className="text-center">
        <h1>404 Page Not Found!</h1>
        <br></br>
        <Link to="/" className="btn-main">
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default FourOFour;
