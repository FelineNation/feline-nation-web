import React from "react";
import { theme, BannerStyle } from "../styles/BannerStyles"; // Import the styled component
import { ThemeProvider } from "@mui/material/styles";

function Banner() {
  return (
    <ThemeProvider theme={theme}>
      <BannerStyle>
        Meet awsome cute cats everyday!
      </BannerStyle>
    </ThemeProvider>
  );
}

export default Banner;
