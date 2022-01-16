import React, { useState, useRef, useEffect } from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import ThankYouModal from "../ThankYouModal";
import "./index.scss";

const ContactForm = ({ loaded }) => {
  const [submitting, setSubmitting] = useState(false);
  const [show, setShow] = useState(false);
  const mgContact = useRef(null);

  const { hash } = useLocation();
  const handleClose = () => setShow(false);

  useEffect(() => {
    // console.log(loaded);
    if (hash === "#register" && loaded) {
      mgContact.current.scrollIntoView();
    }
  }, [hash, loaded]);

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setSubmitting(true);

    const formData = new FormData(mgContact.current);

    try {
      const response = await fetch(
        "https://api.mgconsulting.one/api/register/v1",
        {
          method: "POST",
          body: formData,
        }
      );

      const resContent = await response.json();
      setSubmitting(false);

      setShow(true);

      console.log("susses: ", resContent);
    } catch (err) {
      console.log("error: ", err);
      setSubmitting(false);
    }
  };

  return (
    <form ref={mgContact} onSubmit={handleSubmit}>
      <Row>
        <Col>
          <input
            type="text"
            name="firstName"
            required
            placeholder="FIRST NAME*"
          />
        </Col>
        <Col>
          <input
            type="text"
            name="lastName"
            required
            placeholder="LAST NAME*"
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <input
            type="email"
            name="email"
            required
            placeholder="EMAIL ADDRESS*"
          />
        </Col>
      </Row>

      <Row>
        <Col>
          <input type="phone" name="phone" placeholder="TELEPHONE*" />
        </Col>
      </Row>

      <Row>
        <Col>
          <textarea
            name="message"
            placeholder="COMMENT/QUESTION"
            cols="30"
            rows="5"
          ></textarea>
        </Col>
      </Row>

      <div className="btn-wrapper">
        {!submitting ? (
          <button type="submit" className="btn-main">
            <span>SUBMIT</span>
          </button>
        ) : (
          <Spinner animation="grow" />
        )}
      </div>

      <ThankYouModal {...{ show, handleClose }} />
    </form>
  );
};

export default ContactForm;
