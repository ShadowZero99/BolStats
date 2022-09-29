import React, { useEffect } from "react";
import Button from "../UI/button/Button";
import "./Header.css";
import phoneHeader from "../../assets/a.png";
import "../UI/button/Button.css";
import { BsMouse } from "react-icons/bs";

import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <section id="header">
      <div className="container header">
        <div className="header-left" data-aos="fade-right">
          <h1>
            <span>Start selling on BolStats </span>
            <span>Automate and scale webshops</span>
            <span>together with your team</span>
          </h1>
          <p className="u-text-small u-text-light">
            BolStats is the all-in-one platform for starting and scaling a
            profitable BolStats business.In the BolStats blueprint course you
            will learn all the steps to start your BolStats business. Get all
            the tools you need to become a successful BolStats seller.Automate
            and grow your business through the store management tools. Gain
            insight into your most important figures with the push of a button,
            anywhere, anytime.
          </p>
          <div className="header-cta">
            <Button text={"Learn More"} btnClass={"btn-dark"} href={"#faq"} />
            <Button
              text={"How It Works"}
              btnClass={"btn-orange"}
              href={"#features"}
            />
          </div>
        </div>

        <div className="header-right" data-aos="fade-left">
          <img src={phoneHeader} alt="phone" />
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
