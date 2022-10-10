import "./test.css";
import Lottie from "react-lottie";
import * as animationData from "./ani1.json";
import Navbar from "./../../navbar/Navbar";
import Faq from "react-faq-component";
import Feature from "./Feature";
import Grow from "@mui/material/Grow";
import NewFooter from "../../footer/NewFooter";

const Test = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const data = {
    title: "FAQ (How it works)",
    rows: [
      {
        title: "Lorem ipsum dolor sit amet,",
        content: "Lorem ipsum dolor sit amet, consectetur ",
      },
      {
        title: "Nunc maximus, magna at ultricies elementum",
        content:
          "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam.",
      },
      {
        title: "Curabitur laoreet, mauris vel blandit fringilla",
        content:
          "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc",
      },
      {
        title: "What is the package version",
        content: "v1.0.5",
      },
      {
        title: "Nunc maximus, magna at ultricies elementum",
        content:
          "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam.",
      },
      {
        title: "Curabitur laoreet, mauris vel blandit fringilla",
        content:
          "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc",
      },
    ],
  };

  return (
    <>
      <Navbar />
      <div className="outer">
        <div className="frist">
          <Grow in="false" timeout={2000}>
            <div className="anime">
              <Lottie options={defaultOptions} height={400} width={400} />
            </div>
          </Grow>
        </div>
        <Feature />
      </div>
      <div className="faq">
        <Faq
          data={data}
          styles={{
            titleTextColor: "darkslategrey",
            rowTitleColor: "darkslategrey",
          }}
        />
      </div>

      <NewFooter />
    </>
  );
};

export default Test;
