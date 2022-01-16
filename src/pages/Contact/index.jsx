import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../../components/Hero";

const Contact = (content) => {
  return (
    <div>
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
      <Hero content={content} />
    </div>
  );
};

export default Contact;
