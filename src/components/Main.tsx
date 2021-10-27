import React from "react";
import { Container } from "@mui/material";
import About from "./About";
import Vision from "./Vision";
import Values from "./Values";

const mainContainer = {
  display: "flex",
  flexFlow: "column wrap",
  width: "86%",
  padding: "0 !important",
};

const Main: React.FC = () => {
  return (
    <Container sx={{ ...mainContainer }} maxWidth={false}>
      <About />
      <Vision />
      <Values />
    </Container>
  );
};

export default Main;
