import React from "react";
import { Routes, Route } from 'react-router-dom';
import Bar from "./Components/Navbar/Navbar";
import Hero from "./pages/Homepage/Homepage";
import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Products from "./pages/Products/Products";
import Contact from "./pages/Contact";
import Footer from "./Components/footer/Footer";
import ScrollRestoration from "./Components/ScrollRestoration";

const App = () => {
  return (
    <div>
      <ScrollRestoration />
      <Bar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio/*" element={<Portfolio />} />
        <Route path="/products/*" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
