import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "/src/components/Hero";

const About = (content) => {
  return (
    <div>
      <Helmet>
        <title>About Us</title>
      </Helmet>
      {/* <PageHero content={content} /> */}
      <Hero content={content}></Hero>
    </div>
  );
};

export default About;
