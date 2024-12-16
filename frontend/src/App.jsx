import React from "react";
import Home from "./page/Home/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./page/ContactUs/ContactUs";
import AboutUs from "./page/AboutUs/AboutUs";
import Services from "./page/Services/Services";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
