import React from "react";
import ContactForm from "../../components/ContactUs/ContactForm";
import bg from "../../assets/images/Background.png";
import Navbar from "./../../components/Navbar";
import Footer from "./../../components/Footer";
import OfficeAddress from "../../components/ContactUs/OfficeAddress";

const ContactUs = () => {
  return (
    <div
      className="bg-cover bg-center h-full font-plus"
      style={{ backgroundImage: `url(${bg})` }}>
      <Navbar />
      <div className="my-10 mx-20">
        <ContactForm />
      </div>
      <div className="mb-10 mx-20">
        <OfficeAddress />
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;