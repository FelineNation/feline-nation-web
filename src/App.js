import "./styles/App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Banner from "./components/Banner.js";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import { Box } from "@mui/material";

function App() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Box sx={{ flex: "1 0 auto" }}>
        <Router>
          <Banner />
          <Navbar />
          <Routes>
            <Route exact path="/" component={LandingPage} />
          </Routes>
        </Router>
      </Box>
      <Box sx={{ flexShrink: 0 }}>
        <Footer />
      </Box>
    </Box>
  );
}

export default App;
