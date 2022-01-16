import React from "react";
import { Row, Col } from "react-bootstrap";
import { useLocation, Link } from "react-router-dom";

import projects from "/src/assets/data/projects.json";
import "./index.scss";

const ProjectsGrids = () => {
  const { pathname } = useLocation();
  return (
    <Row className="projects-grids mb-5">
      {projects.map((project, i) => (
        <Col
          key={i}
          xs={12}
          md={6}
          className="text-center d-flex flex-column justify-content-between"
          data-aos="fade-up"
          data-aos-delay={i * 150}
        >
          <div>
            <p
              style={{ fontSize: "1.2rem", fontWeight: "bold" }}
              dangerouslySetInnerHTML={{ __html: project.plan }}
            ></p>
            <p>{project.subtitle}</p>
          </div>

          {pathname === "/projects" ? (
            <div className="btn-wrapper">
              <Link to="#" className="btn-sub mt-4">
                Learn More
              </Link>
            </div>
          ) : (
            ""
          )}
        </Col>
      ))}
    </Row>
  );
};

export default ProjectsGrids;
