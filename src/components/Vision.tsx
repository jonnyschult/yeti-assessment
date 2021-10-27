import React from "react";
import { Container, Typography, Box } from "@mui/material";

const container = {
  position: "relative" as "relative",
  display: "flex",
  flexFlow: { xs: "column wrap", md: "row wrap" },
  justifyContent: { xs: "center", md: "flex-start" },
  height: { md: "550px" },
  alignItems: "center",
  mb: { xs: 10, md: 18, lg: 7 },
  padding: "0",
};

const heading = {
  position: { md: "absolute" as "absolute" },
  right: { md: -200 },
  bottom: { md: 200 },
  fontSize: { md: "120px" },
  width: { xs: "100%", md: "550px" },
  textAlign: "center" as "center",
  mb: 2,
  padding: "0",
  transform: { md: "rotate(90deg)" },
};

const textBox = {
  display: "flex",
  flexFlow: "column wrap",
  width: { md: "85%", lg: "75%" },
};

const subtitle = {
  alignSelf: { md: "flex-start" },
  justifySelf: { md: "flex-start" },
  fontSize: { md: "35px" },
  width: { xs: "100%", md: "50%" },
  mb: { xs: 3, md: "60px" },
  lineHeight: { md: 1.5 },
};

const body = {
  alignSelf: { md: "flex-end" },
  justifySelf: { md: "flex-end" },
  width: { md: "85%", lg: "78%" },
  fontSize: { md: "20px" },
};

const Vision: React.FC = () => {
  return (
    <Container sx={{ ...container }} maxWidth={false}>
      <Typography variant="h2" sx={{ ...heading }}>
        <span
          style={{
            color: "transparent",
            WebkitTextStrokeWidth: "1px",
            WebkitTextStrokeColor: "black",
          }}
        >
          Our vision
        </span>
      </Typography>
      <Box sx={{ ...textBox }}>
        <Typography variant="subtitle1" sx={{ ...subtitle }}>
          Army had half a day. Bad news. Andy Griffith turned us down. He didn't
          like his trailer.{" "}
        </Typography>
        <Typography variant="body1" sx={{ ...body }}>
          Army had half a day. Bad news. Andy Griffith turned us down. He didn't
          like his trailer. That's why you always leave a note! Army had half a
          day. Bad news. Andy Griffith turned us down. He didn't like his
          trailer. That's why you always leave a note! No… but I'd like to be
          asked! Oh, you're gonna be in a coma, all right.
        </Typography>
      </Box>
    </Container>
  );
};

export default Vision;
