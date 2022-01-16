import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import overviewImg from "/src/assets/images/pages/home/overview.jpg";


import "./index.scss";

const Overview = () => {


  return (
    <section id="overview" className="overview">
      <div className="content">
        <h1 className="page-title" data-aos="fade-up" data-aos-delay="0">
          MG Consulting is a multidisciplinary land use and development
          consulting firm helping create vibrant communities across the Lower
          Mainland.
        </h1>

        <Row>
          <Col
            xs={12}
            md={6}
            className="d-flex align-items-center order-2 order-md-1"
          >
            <div className="text-block" data-aos="fade-up" data-aos-delay="200">
              <p>
                At MG Consulting, we offer a full range of development planning
                services for commercial, industrial and residential developments
                that span from initial conception, to land acquisition, all the
                way through pre-construction. Drawing from our specialized
                in-house talent and consultant network, we identify optimal
                development opportunities and ensure successful project
                completion for our clients.
              </p>

              <p>
                United by values of passion, knowledge and innovation, our team
                of industry experts has decades of combined experience in the
                local real estate development market. Together, we provide
                creative solutions to achieve the best possible results, for
                both our clients and the community as a whole.
              </p>

              <div className="btn-wrapper justify-content-start">
                <Link to="/about-us" className="btn-sub">
                  Learn More
                </Link>
              </div>
            </div>
          </Col>
          <Col xs={12} md={6} className="order-1 order-md-2">
            <img src={overviewImg} data-aos="fade-up" data-aos-delay="100" />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Overview;
