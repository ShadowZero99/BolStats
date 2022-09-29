import React from "react";
import "./login.css";

import Navbar from "../../../components/Login/Navbar";
import Footer from "../../../components/Login/Footer";
import Logins from "../../../components/Login/login";
import Subscribe from "../../../components/Subscribe/Subscribe";
const Login = () => {
  return (
    <main>
      <header className="header-bgs">
        <Navbar />
      </header>

      <Logins />
      <Subscribe />
      <Footer />
    </main>
  );
};

export default Login;
