import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { FooterStyle, theme } from "../styles/FooterStyles";

function Footer() {
  return (
    <ThemeProvider theme={theme}>
      <FooterStyle>
        <Typography variant="body1" align="center">
          © 2024 by Feline Nation.
        </Typography>
      </FooterStyle>
    </ThemeProvider>
  );
}

export default Footer;
