import Typography from "@mui/material/Typography";
import Slide from "@mui/material/Slide";

const typo = {
  margin: "20px",
  fontSize: "15px",
};

const Data = () => {
  return (
    <div className="outcard">
      <Slide
        className="feature"
        direction="left"
        in="false"
        mountOnEnter
        unmountOnExit
        timeout={2000}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold", color: "#2463e9" }}>
          Privacy Policy
        </Typography>
      </Slide>
      <Typography align="justify" paragraph="true" style={typo}>
        <Typography paragraph="true" style={typo}>
          This Privacy Notice describes how Binance collects and processes your
          personal information through the Binance websites and applications
          that reference this Privacy Notice.
        </Typography>
        <Typography paragraph="true" style={typo}>
          Binance refers to an ecosystem comprising Binance websites (whose
          domain names include but are not limited to www.binance.com/en),
          mobile applications, clients, applets and other applications that are
          developed to offer Binance Services, and includes
          independently-operated platforms, websites and clients within the
          ecosystem (e.g., Binance’s Open Platform, Binance Launchpad, Binance
          Labs, Binance Charity, Binance DEX, Binance X, JEX, and fiat
          gateways). “Binance Operators” refer to all parties that run Binance,
          including but not limited to legal persons, unincorporated
          organizations and teams that provide Binance Services and are
          responsible for such services. “Binance” as used in this Policy
          includes Binance Operators.{" "}
        </Typography>
        <Typography paragraph="true" style={typo}>
          This Privacy Policy applies to all platforms, websites, and
          departments of Binance and Binance Operators. By using Binance
          Services, you are consenting to the collection, storage, processing
          and transfer of your personal information as described in this Privacy
          Policy.
        </Typography>
        <Typography paragraph="true" style={typo}>
          Binance Services Holdings Limited, a company registered at 6th Floor,
          South Bank House, Barrow Street, 4 Dublin, Ireland, is the data
          controller for personal information collected in connection with
          provision of Binance services.
        </Typography>
      </Typography>
    </div>
  );
};

export default Data;
