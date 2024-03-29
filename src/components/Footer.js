import React from "react";
import { Typography } from "@mui/material";
import { FooterLink, FooterStyle, FooterButton } from "../styles/FooterStyles";
import { GitHub, Instagram, Web } from "@mui/icons-material";

function Footer() {
  return (
      <FooterStyle align="center">
        {" "}
        {/* Add align="center" prop */}
        <Typography variant="body1" align="center">
          © 2024 by Feline Nation.
        </Typography>
        <FooterLink>
          <FooterButton variant="contained" startIcon={<GitHub />} href="https://github.com/FelineNation/feline-nation-web" title="Github" />
          <FooterButton variant="contained" startIcon={<Instagram />} href="https://github.com/FelineNation/feline-nation-web" title="Instgram" />
          <FooterButton variant="contained" startIcon={<Web />} href="https://github.com/FelineNation/feline-nation-web" title="My personal site" />
        </FooterLink>
      </FooterStyle>
  );
}

export default Footer;
