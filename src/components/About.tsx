import React from "react";
import { Container, Typography, Box } from "@mui/material";
import aboutImg from "../assets/about-img.png";

const container = {
  position: "relative" as "relative",
  display: "flex",
  flexFlow: { xs: "column wrap", md: "row wrap" },
  justifyContent: { xs: "center", md: "space-between" },
  height: { md: 650 },
  width: "100%",
  alignItems: "center",
  mt: { md: 25 },
  mb: { xs: 5, md: 10 },
  padding: "0",
};

const heading = {
  //type widening issue
  position: { md: "absolute" as "absolute" },
  top: { md: -85 },
  left: { md: 20 },
  width: { xs: "100%" },
  height: { md: 650 },
  margin: "0",
  padding: "0",
  fontSize: { md: "130px" },
  letterSpacing: "2px",
};

const imgBox = {
  width: { md: "48vw" },
  height: { md: "34vw" },
  alignSelf: "flex-start",
  justifySelf: "flex-start",
  boxShadow: { xs: "2em 2em 0em 0em #d8d8d8", md: "4em 4em 0em 0em #d8d8d8" },
  mb: 4,
};

const textBox = {
  width: { xs: "100%", md: "24%" },
};

const subtitle = {
  mt: 4,
  mb: 4,
};

const body = {
  fontSize: { md: "20px" },
};

const About: React.FC = () => {
  return (
    <Container sx={{ ...container }} maxWidth={false}>
      <Typography variant="h1" sx={{ ...heading }}>
        <span
          style={{
            color: "transparent",
            WebkitTextStrokeWidth: "1px",
            WebkitTextStrokeColor: "black",
          }}
        >
          About
        </span>
      </Typography>
      <Box sx={{ ...imgBox }}>
        <img
          src={aboutImg}
          alt="Apple on platform"
          style={{ objectFit: "fill", width: "100%", height: "100%" }}
        />
      </Box>
      <Box sx={{ ...textBox }}>
        <Typography variant="subtitle1" sx={{ ...subtitle }}>
          Andy Griffith turned us down.
        </Typography>
        <Typography variant="body1" sx={{ ...body }}>
          Army had half a day. Bad news. Andy Griffith turned us down. He didn't
          like his nice trailer. That's why you always leave a note!
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
