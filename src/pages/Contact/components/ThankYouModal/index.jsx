import React from "react";
import { Modal, Button } from "react-bootstrap";

const ThankYouModal = ({ show, handleClose }) => {
  return (
    <Modal centered show={show} onHide={handleClose}>
      <Modal.Body className="text-center">
        <h2>Thank You</h2>
        <p>Modal body text goes here.</p>
      </Modal.Body>
    </Modal>
  );
};

export default ThankYouModal;
