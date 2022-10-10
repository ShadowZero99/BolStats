import React from "react";
import "./Features.css";
import { BsFillBookmarkStarFill } from "react-icons/bs";
//import phoneFeatures from "../../assets/b.jpg";
import Feature from "./Feature.js";
import { featureList } from "./data.js";
import * as animationData from "./bb.json";

import Lottie from "react-lottie";

const Features = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <section id="features">
      <div className="container features">
        <div className="u-title" data-aos="fade-up">
          <BsFillBookmarkStarFill color="#2463e9" size={30} />
          <h2>Core Features</h2>
          <p className="u-text-small u-text-dark">
            Why choose us for web development services?
          </p>
        </div>

        <div className="features-content">
          <div className="features-left" data-aos="fade-left">
            <Lottie options={defaultOptions} height={400} width={600} />
            {/* <img src={phoneFeatures} alt="phone" data-aos="fade-right" /> */}
          </div>
          <div className="features-right" data-aos="fade-right">
            {featureList.map((feature) => (
              <Feature
                key={feature.id}
                icon={feature.icon}
                heading={feature.heading}
                text={feature.text}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
