import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import * as animationData from "./ani4.json";
import Lottie from "react-lottie";
import Grow from "@mui/material/Grow";
import "./privacy.css";
import Data from "./Data";
import Contact from "../../Subscribe/Subscribe";

const Privacy = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="privacy">
      <Navbar />
      <div className="seperator">
        <div className="policy">
          <Data />
        </div>
        <Grow in={"false"} style={{ transformOrigin: "0 0 0" }} timeout={2000}>
          <div className="animation">
            <Lottie options={defaultOptions} height={400} width={400} />
          </div>
        </Grow>
      </div>
      <Contact />
      <Footer />
    </div>
  );
};

export default Privacy;
