import React from "react";
import "./Home.css";
import {
  Navbar,
  Header,
  Features,
  Download,
  Subscribe,
  Faq,
  Footer,
} from "../../../components";

const Home = () => {
  return (
    <main>
      <header className="header-bg">
        <Navbar />
        <Header />
      </header>
      <Features />
      <Download />
      <Subscribe />
      <Faq />
      <Footer />
    </main>
  );
};

export default Home;
