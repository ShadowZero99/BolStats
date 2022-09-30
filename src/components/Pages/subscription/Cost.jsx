import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import "./cost.css";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import { styled } from "@mui/material/styles";
import Slide from "@mui/material/Slide";
import Grow from "@mui/material/Grow";

const Cost = () => {
  const tier = {
    title: "Monltly",
    price: "7.5",
    description: [
      "20 users included",
      "10 GB of storage",
      "Help center access",
      "Priority email support",
    ],
    buttonText: "Purchase",
    buttonVariant: "contained",
  };

  const StyledBox = styled(Box)(({ theme }) => ({
    width: "80%",
    height: "95%",
    marginLeft: "130px",
    marginBottom: "50px",
    animation: "1s ${bounceAnimation}",
    borderRadius: "20px",

    [theme.breakpoints.down("md")]: {
      width: "100%",
      margin: "0",
      marginBottom: "30px",
    },
  }));

  const StyledDiv = styled("div")(({ theme }) => ({
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 25,
    [theme.breakpoints.down("md")]: {
      width: "100%",
      flexDirection: "column",
    },
  }));

  return (
    <div className="back">
      <Navbar />
      <Slide
        direction="left"
        in="flase"
        timeout={1000}
        mountOnEnter
        unmountOnExit
      >
        <StyledBox className="boxcard">
          <Typography variant="h2" align="center" color="white">
            Get Everything
          </Typography>
          <Typography variant="h4" align="center" color="white">
            On One Package
          </Typography>

          <StyledDiv className="handle">
            <Grow in="false" timeout={3000}>
              <div className="details" style={{ margin: "50px" }}>
                <img
                  src="./assets/download.png"
                  alt="dummyimage"
                  className="dummyImage"
                  style={{ width: "100%" }}
                />
                {tier.description.map((desc) => {
                  return (
                    <Typography color="white">
                      {desc}
                      {desc}
                      {desc}
                    </Typography>
                  );
                })}
              </div>
            </Grow>
            <Grow in="false" timeout={5000}>
              <Card
                align="right"
                sx={{
                  width: "300px",
                  height: "350px",
                  boxShadow: "5px 5px 20px 5px #5ae8e3",
                  borderRadius: "5%",
                  margin: "50px",
                }}
                className="cardbox"
              >
                <CardHeader
                  title={tier.title}
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{
                    align: "center",
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                  className="cardbox"
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "baseline",
                      mb: 2,
                    }}
                  >
                    <Typography
                      component="h2"
                      variant="h3"
                      color="text.primary"
                    >
                      € {tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /mo
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                        sx={{ listStyle: "none" }}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    variant={tier.buttonVariant}
                    sx={{ borderRadius: "10px" }}
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grow>
          </StyledDiv>
        </StyledBox>
      </Slide>
      <Footer />
    </div>
  );
};

export default Cost;
