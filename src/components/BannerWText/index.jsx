import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const BannerWText = ({ data: { title, url }, bannerImg }) => {
  return (
    <div className="banner-w-text">
      <img src={bannerImg} alt="" />

      <div className="text-block">
        {title ? <h4 className="text-center">{title}</h4> : ""}

        {url ? (
          <div className="btn-wrapper">
            <Link to={url} className="btn-sub-blue">
              Learn More
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default BannerWText;
