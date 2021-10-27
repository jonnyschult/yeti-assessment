import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: "Eczar",
      fontSize: "99px",
    },
    h2: {
      fontFamily: "Eczar",
      fontSize: "73px",
    },
    subtitle1: {
      fontFamily: "Poppins",
      fontSize: "24px",
      letterSpacing: "0.46px",
    },
    body1: {
      fontFamily: "roboto mono",
      fontSize: "18px",
      fontWeight: "normal",
      color: "#4a4a4a",
    },
  },
});

export default theme;
