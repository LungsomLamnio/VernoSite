import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

import Navbar from "./components/common/Navbar"
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  useEffect(() => {
    AOS.init({ 
      duration: 1000, 
      once: true,
      easing: 'ease-in-out' 
    });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="bg-white selection:bg-yellow-200 antialiased min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;