import React from "react";
import "./Features.css";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import phoneFeatures from "../../assets/b.jpg";
import Feature from "./Feature.js";
import { featureList } from "./data.js";

const Features = () => {
  return (
    <section id="features">
      <div className="container features">
        <div className="u-title" data-aos="fade-up">
          <BsFillBookmarkStarFill color="orangered" size={30} />
          <h2>Core Features</h2>
          <p className="u-text-small u-text-dark">
            Why choose us for web development services?
          </p>
        </div>

        <div className="features-content">
          <div className="features-left">
            <img src={phoneFeatures} alt="phone" data-aos="fade-right" />
          </div>
          <div className="features-right" data-aos="fade-left">
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
