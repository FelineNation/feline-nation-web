import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Search as SearchIcon, GitHub as GitHubIcon, Login as LoginIcon } from "@mui/icons-material";
import { ThemeProvider } from "@mui/material/styles";
import { theme, Search, SearchIconWrapper, StyledInputBase } from "../styles/NavbarStyles";

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
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} />
          </Search>
          <Button startIcon={<GitHubIcon />} color="inherit" href="https://github.com/FelineNation/feline-nation-web">
            GitHub
          </Button>
          <Button startIcon={<LoginIcon />} color="inherit">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default Navbar;
