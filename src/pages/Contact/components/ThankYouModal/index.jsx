import React from "react";
import { Modal, Button } from "react-bootstrap";

const ThankYouModal = ({ show, handleClose }) => {
  return (
    <Modal centered show={show} onHide={handleClose}>
      <Modal.Body className="text-center p-5">
        <h2>Thank You</h2>
        <p style={{ maxWidth: "300px", margin: "0 auto" }}>
          Your message has been received. A member of our team will get back to
          you shortly.
        </p>
      </Modal.Body>
    </Modal>
  );
};

export default ThankYouModal;
