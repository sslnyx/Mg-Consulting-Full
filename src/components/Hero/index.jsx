import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import ContactForm from "../../pages/Contact/components/Form";
import bgLogo from "/src/assets/images/logos/MG-watermarkt-blue&green.svg";

import "./index.scss";

const Hero = ({ content: { heroImg, title, subTitle, subImg, content } }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  return (
    <>
      <div className="hero-wrapper">
        <img className="heroImg" src={heroImg} alt="" />
        <div className="content">
          <div className="hero-block">
            <div className="bg-block">
              <img src={bgLogo} alt="bgLogo" />
            </div>

            <div className="text-content">
              <h1 className="text-uppercas">{title}</h1>
              <p dangerouslySetInnerHTML={{ __html: subTitle }} />
            </div>
          </div>
        </div>
      </div>

      <section className="pageHero">
        <div className="content">
          <Row>
            <Col xs={12} md={6}></Col>
            <Col xs={12} md={6}>
              <img className="mb-5" src={subImg} alt="" onLoad={() => setImgLoaded(true)} />

              {content ? (
                <div
                  className="text-block"
                  dangerouslySetInnerHTML={{ __html: content }}
                />
              ) : title === "Contact Us" ? (
                <ContactForm loaded={imgLoaded} />
              ) : (
                ""
              )}
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default Hero;
