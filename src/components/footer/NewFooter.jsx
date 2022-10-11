import { Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { Box } from "@mui/system";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import { useState } from "react";
const NewFooter = () => {
  const [isHoverfb, setIsHoverfb] = useState(false);
  const [isHovergg, setIsHovergg] = useState(false);
  const [isHoverin, setIsHoverin] = useState(false);

  const handleMouseEnterfb = () => {
    setIsHoverfb(true);
  };

  const handleMouseLeavefb = () => {
    setIsHoverfb(false);
  };

  const handleMouseEntergg = () => {
    setIsHovergg(true);
  };

  const handleMouseLeavegg = () => {
    setIsHovergg(false);
  };

  const handleMouseEnterin = () => {
    setIsHoverin(true);
  };

  const handleMouseLeavein = () => {
    setIsHoverin(false);
  };

  const boxStyle1 = {
    width: "30px",
    fontSize: "60px",
    margin: "10px",
    cursor: "pointer",
    color: isHoverfb ? "blue" : "darklategrey",
  };
  const boxStyle2 = {
    width: "30px",
    fontSize: "60px",
    margin: "10px",
    cursor: "pointer",
    color: isHovergg ? "blue" : "darklategrey",
  };
  const boxStyle3 = {
    width: "30px",
    fontSize: "60px",
    margin: "10px",
    cursor: "pointer",
    color: isHoverin ? "blue" : "darklategrey",
  };
  return (
    <section id="footer">
      <Box
        sx={{ flexGrow: 1 }}
        style={{
          width: "80%",
          marginLeft: "10% ",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div style={{ width: "70%", paddingRight: "5%" }}>
          <Typography
            variant="h4"
            sx={{
              fontSize: "25px",
              fontFamily: "ubuntu",
              fontWeight: "bold",
              color: "#45464a",
              marginBottom: "40px",
            }}
          >
            BolStats
          </Typography>
          <Typography
            sx={{
              fontSize: "large",
              fontFamily: "ubuntu",
              fontWeight: "300",
            }}
          >
            We are creating High Quality Resources and tools to Aid developers
            during the developement of their projects
          </Typography>
          <FacebookIcon
            style={boxStyle1}
            onMouseEnter={handleMouseEnterfb}
            onMouseLeave={handleMouseLeavefb}
          />
          <GoogleIcon
            style={boxStyle2}
            onMouseEnter={handleMouseEntergg}
            onMouseLeave={handleMouseLeavegg}
          />
          <InstagramIcon
            style={boxStyle3}
            onMouseEnter={handleMouseEnterin}
            onMouseLeave={handleMouseLeavein}
          />
        </div>
        <Grid container spacing={16}>
          <Grid xs={4}>
            <Typography
              variant="h4"
              sx={{
                fontSize: "25px",
                fontFamily: "ubuntu",
                fontWeight: "bold",
                color: "#45464a",
                marginBottom: "20px",
              }}
            >
              Bolstats
            </Typography>
            <Typography
              sx={{
                fontSize: "large",
                fontFamily: "ubuntu",
                fontWeight: "300",
              }}
            >
              Resources
            </Typography>
            <Typography
              sx={{
                fontSize: "large",
                fontFamily: "ubuntu",
                fontWeight: "300",
              }}
            >
              About us
            </Typography>
            <Typography
              sx={{
                fontSize: "large",
                fontFamily: "ubuntu",
                fontWeight: "300",
              }}
            >
              Contact
            </Typography>
            <Typography
              sx={{
                fontSize: "large",
                fontFamily: "ubuntu",
                fontWeight: "300",
              }}
            >
              Blog
            </Typography>
          </Grid>
          <Grid xs={4}>
            <Typography
              variant="h4"
              sx={{
                fontSize: "25px",
                fontFamily: "ubuntu",
                fontWeight: "bold",
                color: "#45464a",
                marginBottom: "20px",
              }}
            >
              Help
            </Typography>
            <Typography
              sx={{
                fontSize: "large",
                fontFamily: "ubuntu",
                fontWeight: "300",
              }}
            >
              Support
            </Typography>
            <Typography
              sx={{
                fontSize: "large",
                fontFamily: "ubuntu",
                fontWeight: "300",
              }}
            >
              Sign Up
            </Typography>
            <Typography
              sx={{
                fontSize: "large",
                fontFamily: "ubuntu",
                fontWeight: "300",
              }}
            >
              Sign In
            </Typography>
            <Typography
              sx={{
                fontSize: "large",
                fontFamily: "ubuntu",
                fontWeight: "300",
              }}
            >
              Register
            </Typography>
          </Grid>
          <Grid xs={3}>
            <Typography
              variant="h4"
              sx={{
                fontSize: "25px",
                fontFamily: "ubuntu",
                fontWeight: "bold",
                color: "#45464a",
                marginBottom: "20px",
              }}
            >
              Products
            </Typography>
            <Typography
              sx={{
                fontSize: "large",
                fontFamily: "ubuntu",
                fontWeight: "300",
              }}
            >
              Windframe
            </Typography>
            <Typography
              sx={{
                fontSize: "large",
                fontFamily: "ubuntu",
                fontWeight: "300",
              }}
            >
              Loop
            </Typography>
            <Typography
              sx={{
                fontSize: "large",
                fontFamily: "ubuntu",
                fontWeight: "300",
              }}
            >
              Cotracts
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default NewFooter;
