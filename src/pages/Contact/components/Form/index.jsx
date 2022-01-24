import React, { useState, useRef, useEffect } from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import ThankYouModal from "../ThankYouModal";
import "./index.scss";

const ContactForm = ({ loaded }) => {
  const [submitting, setSubmitting] = useState(false);
  const [show, setShow] = useState(false);
  const mgContact = useRef(null);

  const handleClose = () => setShow(false);
  // const { hash } = useLocation();

  // useEffect(() => {
  //   // console.log(loaded);
  //   if (hash === "#register" && loaded) {
  //     mgContact.current.scrollIntoView();
  //   }
  // }, [hash, loaded]);

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
          <div className="input-wrapper">
            <input type="text" name="firstName" required placeholder="FIRST NAME*" />
          </div>
        </Col>
        <Col>
          <div className="input-wrapper">
            <input type="text" name="lastName" required placeholder="LAST NAME*"/>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <div className="input-wrapper">
            <input type="email" name="email" required placeholder="EMAIL*" />

          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <div className="input-wrapper">
            <input type="phone" name="phone" required placeholder="TELEPHONE*" />
          </div>
        </Col>
      </Row>

      <div className="input-wrapper">
        <textarea
          name="message"
          cols="30"
          rows="5"
          placeholder="COMMENT/QUESTION"
        ></textarea>
      </div>

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
