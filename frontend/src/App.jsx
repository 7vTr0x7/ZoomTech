import React from "react";
import Home from "./page/Home/Home";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./page/ContactUs/ContactUs";
import AboutUs from "./page/AboutUs/AboutUs";
import Services from "./page/Services/Services";
import Service from "./page/Services/features/Service";
import ProjectDetails from "./page/ProjectDetails/ProjectDetails";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:service" element={<Service />} />
          <Route
            path="/services/:service/project-details"
            element={<ProjectDetails />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
