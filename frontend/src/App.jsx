import React from "react";
import Home from "./page/Home/Home";

import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import ContactUs from "./page/ContactUs/ContactUs";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
