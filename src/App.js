import "./styles/App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Banner from "./components/Banner.js";
import Navbar from "./components/Navbar.js";

function App() {
  return (
    <Router>
      <Banner />
      <Navbar />
      <Routes>
        <Route exact path="/" component={LandingPage} />
      </Routes>
    </Router>
  );
}

export default App;
