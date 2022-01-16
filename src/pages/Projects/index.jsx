import React from "react";
import { Helmet } from "react-helmet-async";
import ProjectsGrids from "../../components/ProjectsGrids";
import BannerWText from "../../components/BannerWText";
import Hero from "../../components/Hero";
import Pen from "/src/assets/images/pages/our-projects/pen.jpg";

const Projects = (content) => {
  const bannerData = {
    data: {
      title: "Partner with us today on your next planning project",
      url: "/contact-us#register",
    },
    bannerImg: Pen,
  };
  return (
    <div className="page-project">
      <Helmet>
        <title>Projects</title>
      </Helmet>
      <Hero content={content} />

      <section>
        <div className="content">
          <h3 className="text-center mb-5">
            EXPLORE OUR FEATURED COMMUNITIES:
          </h3>

          <ProjectsGrids />
        </div>
      </section>
      <BannerWText {...bannerData} />
    </div>
  );
};

export default Projects;
