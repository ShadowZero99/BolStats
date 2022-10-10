import React, { useEffect } from "react";
import Button from "../UI/button/Button";
import "./Header.css";
//import phoneHeader from "../../assets/a.png";
import "../UI/button/Button.css";
import { BsMouse } from "react-icons/bs";
//import Lottie from "react-lottie";
import * as animationData from "./aa.json";

import Lottie from "react-lottie";
//import animationData from "./lotties/kiss-of-the-heart";

import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section id="header">
      <div className="container header">
        <div className="header-left" data-aos="fade-right">
          <h1>
            <span>Start selling on BolStats </span>
            <span>Automate webshops together with your team</span>
            <span></span>
          </h1>
          <p className="u-text-small u-text-light">
            BolStats is the all-in-one platform for starting and scaling a
            profitable BolStats business.In the BolStats blueprint course you
            will learn all the steps to start your BolStats business. Get all
            the tools you need to become a successful BolStats seller.Automate
            and grow your business through the store management tools.
          </p>
          <div className="header-cta">
            {/* <Button
              text={"Learn More"}
              color="#2463e9"
              btn
              Class={"btn-dark"}
              href={"#faq"}
            /> */}
            <Button
              text={"How It Works"}
              btnClass={"btn-orange"}
              href={"#features"}
            />
          </div>
        </div>

        <div className="header-right" data-aos="fade-left">
          <Lottie options={defaultOptions} height={300} width={600} />
          {/* <img src={phoneHeader} alt="phone" /> */}
        </div>
      </div>

      <div className="floating-icon">
        <a href="#faq">
          <BsMouse color="#fff" size={25} className="mouse" />
        </a>
      </div>
    </section>
  );
};

export default Header;
