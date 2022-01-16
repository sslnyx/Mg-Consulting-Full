import servicesList from "/src/assets/data/servicesList.json";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.scss";

const ServicesList = ({ bgImg, url }) => {
  const newList = servicesList.reduce((acc, serv, i) => {
    i < servicesList.length / 2
      ? (!acc["col1"] ? (acc["col1"] = []) : "", acc["col1"].push(serv))
      : (!acc["col2"] ? (acc["col2"] = []) : "", acc["col2"].push(serv));

    return acc;
  }, {});
  return (
    <div className="services-list">
      <div className="content">
        <h3 className="mb-5 mt-5">OUR FULL SCOPE OF SERVICES INCLUDE</h3>
      </div>

      <div className="services-list-wrapper">
        {bgImg ? <img className="s-bg" src={bgImg} alt="" /> : ""}

        <div className="content">
          <Row>
            {Object.values(newList).map((col, i) => (
              <Col xs={12} md={6} key={i}>
                <ul>
                  {col.map((el, j) => (
                    <li key={j}>{el}</li>
                  ))}
                </ul>
              </Col>
            ))}
          </Row>
          {url ? (
            <div className="btn-wrapper">
              <Link to="/services" className="btn-sub">
                Learn More
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ServicesList;
