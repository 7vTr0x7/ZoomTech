import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ServicesHeader from "../../components/Services/ServicesHeader";
import ContactForm from "../../components/ContactUs/ContactForm";
import ServiceCubes from "../../components/Services/ServiceCubes";
import ServiceList from "../../components/Services/ServiceList";


const Services = () => {
  return (
    <>
      <Navbar />
      <ServicesHeader />
      <ServiceCubes />
      <ServiceList />
      <div className="mb-10  mx-4 md:mx-20">
        <ContactForm />
      </div>

      <Footer />
    </>
  );
};

export default Services;
