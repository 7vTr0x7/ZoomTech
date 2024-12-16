import React from "react";
import Home from "./page/Home/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./page/ContactUs/ContactUs";
import AboutUs from "./page/AboutUs/AboutUs";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
