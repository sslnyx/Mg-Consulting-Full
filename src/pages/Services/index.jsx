import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../../components/Hero";
import BannerWText from "../../components/BannerWText";
import Meeting from "/src/assets/images/pages/core-services/meeting.jpg";
import ServicesList from "../../components/ServicesList";
import "./index.scss"

const Services = (content) => {
  const bannerData = {
    data: {
      title: null,
      url: null,
    },
    bannerImg: Meeting,
  };

  return (
    <div className="page-services">
      <Helmet>
        <title>Services</title>
      </Helmet>

      <Hero content={content} />
      <ServicesList />

      <BannerWText {...bannerData} />
    </div>
  );
};

export default Services;
