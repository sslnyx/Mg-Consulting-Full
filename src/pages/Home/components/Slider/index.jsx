import React, { useState } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useEffect } from "react";
import { slideImgs } from "../../../../assets/images/pages/home";
import autoSwitch from "./autoSwitch";

import "keen-slider/keen-slider.min.css";
import "./index.scss";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      //   rtl: true,
      loop: true,
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
    },
    [
      // add plugins here
      autoSwitch,
    ]
  );

  const slides = [
    {
      title: "Unlocking the full potential<br> of urban communities",
    },
    {
      title: "Delivering creative solutions<br> for complex land use issues",
    },
    {
      title: "Ensuring long-term sustainability<br> and commercial viability",
    },
    {
      title: "Leading the way with passion,<br> knowledge and innovation",
    },
  ];

  return (
    <section className="HeroBanner">
      <div ref={sliderRef} className="keen-slider">
        {slides.map((slide, i) => (
          <div className="keen-slider__slide" key={i}>
            <img src={slideImgs[i]} alt="" />
            <div className="content d-flex align-items-center">
              <h2 dangerouslySetInnerHTML={{ __html: slide.title }}></h2>
            </div>
          </div>
        ))}
      </div>

      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx);
                }}
                className={"dot" + (currentSlide === idx ? " active" : "")}
              ></button>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default HeroSlider;
