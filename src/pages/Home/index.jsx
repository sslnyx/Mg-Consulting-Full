import React from "react";
import "./index.scss";

import HeroSlider from "./components/Slider";
import Overview from "./components/Overview";
import Services from "./components/Services";
import Projects from "./components/Projects";

const Home = () => {
  return (
    <div>
      <HeroSlider />
      <Overview />
      <Services />
      <Projects />
    </div>
  );
};

export default Home;
