import React, { useState } from "react";
import "./Navbar.css";
import { SiAnaconda } from "react-icons/si";
import { RiCloseLine } from "react-icons/ri";
import { AiOutlineBars } from "react-icons/ai";
import Button from "../UI/button/Button";
import "../UI/button/Button.css";
// import logos from "../../assets/logos.png";
import { Link } from "react-router-dom";
//import Home from "../../components/Pages/Home/Home";
//import Login from "../Pages/Login/login";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <nav className="container navbar">
      <div className="logo">
        {/* <img src={logos} alt="phone" size={4}></img> */}
        <SiAnaconda color="#fff" size={33} />

        <p className="logo-text">
          Bol<span>Stats</span>
        </p>
      </div>

      <menu>
        <ul
          className="nav-links"
          id={showMenu ? "nav-links-mobile" : "nav-links-mobile-hide"}
        >
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>

          <li>
            <Link to="/Fees">Fees</Link>
          </li>
          <li>
            <Link to="/Subscribe">Subscribe</Link>
          </li>
          <li>
            <a href="#subcribe">Contact US</a>
          </li>
          <li>
            <Link to="/PrivacyPolicy">Privacy Policy</Link>
          </li>

          {/*<li className="nav-btn">
                
                <a href="#faq" className='btn
  btn-dark'>Get Stareted</a></li>*/}

          <li className="nav-btn">
            <Button text={"Need help?"} btnClass={"btn-dark"} href={"#faq"} />
          </li>
        </ul>
      </menu>
      <div className="menu-icons" onClick={toggleMenu}>
        {showMenu ? (
          <RiCloseLine color="#fff" size={30} />
        ) : (
          <AiOutlineBars color="#fff" size={27} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
