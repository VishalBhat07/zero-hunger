// App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import About from "./pages/About/About.jsx";
import MarketPlace from "./pages/MarketPlace/MarketPlace.jsx";
import Logistics from "./pages/Logistics/Logistics.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Resources from "./pages/Resources/Resources.jsx";
import Login from "./pages/Login/Login.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/MarketPlace" element={<MarketPlace />} />
        <Route path="/Logistics" element={<Logistics />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Resources" element={<Resources />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
