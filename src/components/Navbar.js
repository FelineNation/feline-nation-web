import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Login } from "@mui/icons-material";
import { ThemeProvider } from "@mui/material/styles";
import { NavbarButtons, theme } from "../styles/NavbarStyles";

function Navbar() {
  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static" component="div">
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
              Feline Nation
            </Link>
          </Typography>
          <NavbarButtons>
            <Button startIcon={<Login />} color="inherit">
              Login
            </Button>
          </NavbarButtons>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default Navbar;
