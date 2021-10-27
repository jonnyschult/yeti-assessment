import React from "react";
import { Container, Typography, Box } from "@mui/material";
import valueImg from "../assets/values-img.png";

const container = {
  position: "relative" as "relative",
  display: "flex",
  flexFlow: "column wrap",
  justifyContent: "center",
  alignItems: "center",
  height: { md: 1445 },
  margin: "0 0 8em 0",
  padding: "0",
};

const imgBox = {
  alignSelf: "center",
  justifySelf: "center",
  width: { md: "88%" },
  height: { md: "40%" },
  boxShadow: {
    xs: "-2em -2em 0em 0em #ebe9ea",
    md: "-4em -5em 0em 0em #ebe9ea",
  },
  mb: { xs: 10, md: 0 },
};

const headingBox = {
  position: "relative" as "relative",
  width: "100%",
  height: "100px",
};

const heading = {
  position: { md: "absolute" as "absolute" },
  top: { md: "-75px" },
  width: "100%",
  fontSize: { xs: "68px", md: "120px" },
  textAlign: "center" as "center",
  margin: "0",
  padding: "0",
};

const subtitle = {
  fontSize: { md: "35px" },
  width: { xs: "100%", md: "57%" },
  textAlign: "center" as "center",
  mt: 3,
  mb: 4,
};

const body = {
  width: { md: "48%" },
  fontSize: { xs: "16px", md: "20px" },
};

const Values: React.FC = () => {
  return (
    <Container sx={{ ...container }} maxWidth={false}>
      <Box sx={{ ...imgBox }}>
        <img
          src={valueImg}
          alt="Abstract, textured upside down triangle."
          style={{ objectFit: "fill", width: "100%", height: "100%" }}
        />
      </Box>
      <Box sx={{ ...headingBox }}>
        <Typography variant="h2" sx={{ ...heading }}>
          <span
            style={{
              color: "transparent",
              WebkitTextStrokeWidth: "1px",
              WebkitTextStrokeColor: "black",
            }}
          >
            Our values
          </span>
        </Typography>
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography variant="subtitle1" sx={{ ...subtitle }}>
          Army had half a day. Bad news. Andy Griffith turned us down. He didn't
          like his trailer.{" "}
        </Typography>
        <Box
          sx={{
            display: { md: "flex" },
            justifyContent: { md: "space-between" },
          }}
        >
          <Typography
            variant="body1"
            sx={{
              ...body,
              mb: { xs: 3, md: 0 },
            }}
          >
            Army had half a day. Bad news. Andy Griffith turned us down. He
            didn't like his trailer. That's why you always leave a note! Army
            had half a day. Bad news. Andy Griffith turned us down. He didn't
            like his trailer. That's why you always leave a note! No… but I'd
            like to be asked! Oh, you're gonna be in a coma, all right.
          </Typography>

          <Typography variant="body1" sx={{ ...body }}>
            Army had half a day. Bad news. Andy Griffith turned us down. He
            didn't like his trailer. That's why you always leave a note! Army
            had half a day. Bad news. Andy Griffith turned us down.{" "}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Values;
