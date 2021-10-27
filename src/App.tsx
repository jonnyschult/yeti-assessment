import React from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material";
import Header from "./components/Header";
import theme from "./theme";
import Main from "./components/Main";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Header />
        <Main />
      </>
    </ThemeProvider>
  );
}

export default App;
