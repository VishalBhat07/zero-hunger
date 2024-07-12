// App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import About from "./pages/About/About.jsx";
import MarketPlace from "./pages/MarketPlace/MarketPlace.jsx";
import Logistics from "./pages/Logistics/Logistics.jsx";
import Resources from "./pages/Resources/Resources.jsx";
import Contact from "./pages/Contact/Contact.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/MarketPlace" element={<MarketPlace />} />
        <Route path="/Logistics" element={<Logistics />} />
        <Route path="/Resources" element={<Resources />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
