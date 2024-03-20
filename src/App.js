import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Banner from "./components/Banner.js";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AppBox, ContentBox, FooterBox } from "./styles/AppStyles";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setTheme(mediaQuery.matches ? "dark" : "light");

    const handler = () => setTheme(mediaQuery.matches ? "dark" : "light");
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const muiTheme = createTheme({
    palette: {
      mode: theme,
      common: {
        white: "#ffffff",
        black: "#000000",
      },
      primary: {
        main: "#000",
      },
    },
  });

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <AppBox>
        <ContentBox>
          <Router>
            <Banner />
            <Navbar />
            <Routes>
              <Route exact path="/" component={LandingPage} />
            </Routes>
          </Router>
        </ContentBox>
        <FooterBox>
          <Footer />
        </FooterBox>
      </AppBox>
    </ThemeProvider>
  );
}

export default App;
