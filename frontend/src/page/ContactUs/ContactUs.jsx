import React from "react";
import ContactForm from "../../components/ContactUs/ContactForm";
import bg from "../../assets/Background.png";
import Navbar from "./../../components/Navbar";
import Footer from "./../../components/Footer";
import OfficeAddress from "../../components/ContactUs/OfficeAddress";

const ContactUs = () => {
  return (
    <div
      className="bg-cover bg-center h-full font-plus"
      style={{ backgroundImage: `url(${bg})` }}>
      <Navbar />
      <div className="mt-28 mb-10 mx-4 md:mx-20">
        <ContactForm />
      </div>
      <div className="mb-10 mx-4 md:mx-20">
        <OfficeAddress />
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
