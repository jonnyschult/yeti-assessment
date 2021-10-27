import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Button,
} from "@mui/material";
import logoImg from "../assets/logo.svg";
import hamburger from "../assets/hamburger.svg";

const appBar = {
  display: "flex",
  alignItems: "center",
  boxShadow: "0 0 0em 0em #ffffff",
  backgroundColor: "white",
  width: "100%",
  padding: "1em 0 1em 0",
};

const toolbar = {
  display: "flex",
  justifyContent: { xs: "flex-end", md: "space-between" },
  width: "86%",
};

const menuText = {
  color: "#1e252c",
  fontSize: "12px",
  letterSpacing: "3px",
};

const logo = {
  display: { xs: "none", md: "block" },
};

const Header: React.FC = () => {
  return (
    <AppBar position="static" sx={{ ...appBar }}>
      <Toolbar sx={{ ...toolbar }}>
        <Box sx={{ ...logo }}>
          <img src={logoImg} alt="" />
        </Box>
        <Box display="flex" alignItems="center">
          <Typography variant="subtitle1" sx={{ ...menuText }}>
            MENU
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Button>
              {" "}
              <img src={hamburger} alt="Menu button. Two lines" />
            </Button>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
