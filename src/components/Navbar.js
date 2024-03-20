import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button } from "@mui/material";
import { Login } from "@mui/icons-material";
import { NavbarButtons, ThemedAppBar, ThemedToolbar } from "../styles/NavbarStyles";

function Navbar() {
  return (
    <ThemedAppBar component="div">
      <ThemedToolbar>
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
      </ThemedToolbar>
    </ThemedAppBar>
  );
}

export default Navbar;
