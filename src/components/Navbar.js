import React from "react";
import { Link } from "react-router-dom";
import { Toolbar, Typography, Button } from "@mui/material";
import { Login } from "@mui/icons-material";
import { NavbarButtons, ThemedAppBar } from "../styles/NavbarStyles";

function Navbar() {
  return (
    <ThemedAppBar component="div">
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
    </ThemedAppBar>
  );
}

export default Navbar;
