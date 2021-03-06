import React from "react";
import { Link } from "react-router-dom";
import ProjectsGrids from "../../../../components/ProjectsGrids";

import "./index.scss";

const Projects = () => {
  // console.log(projects);
  return (
    <section className="projects">
      <div className="content">
        <h2 className="line-title mb-5">
          FEATURED
          <br />
          PROJECTS
        </h2>

        <Link to="/our-projects">
          <ProjectsGrids />
        </Link>

        <div className="btn-wrapper">
          <Link to="/our-projects" className="btn-sub-blue">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
