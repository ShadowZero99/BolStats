import "./test.css";
import Lottie from "react-lottie";
import * as animationData from "./ani1.json";
import Navbar from "./../../navbar/Navbar";
import Footer from "./../../footer/Footer";

import Slide from "@mui/material/Slide";
import CheckIcon from "@mui/icons-material/Check";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Grow from "@mui/material/Grow";
import Contact from "../../Subscribe/Subscribe";

const Test = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const details = [
    { text: "free for all", time: 1000 },
    { text: "life time access", time: 2000 },
    { text: "business tools", time: 3000 },
    { text: "recomenta system", time: 3500 },
    { text: "just nothing", time: 4000 },
  ];

  return (
    <>
      <Navbar />
      <div className="outer">
        <div className="frist">
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
        <div className="second">
          <Typography
            align="center"
            sx={{
              color: "white",
              fontSize: "30px",
              fontWeight: 700,
              marginBottom: "15px",
            }}
          >
            Get Everthing in one Package
          </Typography>
          {details.map((data) => {
            return (
              <div className="wrap">
                <Grow
                  in={"false"}
                  style={{ transformOrigin: "0 0 0" }}
                  timeout={data.time}
                >
                  <CheckIcon
                    sx={{
                      align: "center",
                      color: "white",
                      fontSize: "20px",
                      marginRight: "10px",
                      marginTop: "10px",
                    }}
                  />
                </Grow>
                <Slide
                  key={data.time}
                  className="feature"
                  direction="left"
                  in="false"
                  mountOnEnter
                  unmountOnExit
                  timeout={data.time}
                >
                  <Typography
                    sx={{
                      fontSize: "25px",
                      marginLeft: "10px",
                    }}
                  >
                    {data.text}
                  </Typography>
                </Slide>
              </div>
            );
          })}
          <Typography
            size="large"
            sx={{
              color: "aliceblue",
              fontSize: "40px",
              marginTop: "40px",
              display: "flex",
              flexDirection: "row",
            }}
          >
            $ 100/
            <Typography sx={{ fontSize: "20px", marginTop: "20px" }}>
              month
            </Typography>
          </Typography>

          <Button
            variant="outlined"
            color="primary"
            size="large"
            className="button"
            sx={{
              marginTop: "30px",
              backgroundColor: "darkblue",
              borderRadius: "20px",
              fontSize: "20px",
              color: "aliceblue",
              // boxShadow: " 0px 0px 5px 5px",
            }}
          >
            Subscribe
          </Button>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
};

export default Test;
