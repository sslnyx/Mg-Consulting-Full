import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import ServicesList from "../../../../components/ServicesList";
import serviceBg from "/src/assets/images/pages/home/Mask-Group-11.jpg";
import servImg from "/src/assets/images/pages/core-services/core-services.jpg";
import keysImg from "/src/assets/images/pages/core-services/keys.jpg";
import bgLogo from "/src/assets/images/logos/MG-watermarkt-blue&green.svg";

import "./index.scss";

const Services = () => {
  const listData = {
    bgImg: serviceBg,
    url: "/services",
  };
  return (
    <section id="services" className="services">
      <div className="content serv-des">
        <img className="bgLogo" src={bgLogo} alt="bglogo" />

        <h2 className="line-title">
          CORE <br /> SERVICES
        </h2>

        <Row>
          <Col xs={12} md={6}>
            <div className="img-wrapper">
              <img src={servImg} alt="" />
              <img src={keysImg} alt="" />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <div className="text-block">
              <h3 className="mb-4">
                Navigating through
                <br /> complex land
                <br /> development processes
              </h3>
              <p>
                At MG Consulting, we thrive in navigating through these complex
                problems. As the core of our services, we locate and identify
                land acquisition opportunities with the most optimal development
                potential. We also help clients better understand all issues
                related to acquiring land, permit approvals and the costs of
                development throughout all stages of the process.
              </p>
            </div>
          </Col>
        </Row>
      </div>

      <ServicesList {...listData} />
    </section>
  );
};

export default Services;
