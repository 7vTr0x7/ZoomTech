import React from "react";
import { useLocation } from "react-router-dom";
import bg from "../../../assets/images/servicesBg.png";
import ContactForm from "../../../components/ContactUs/ContactForm";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";

import dribbleShot from "../../../assets/images/DribbbleShot.png";

import UIUXFeatures from "../../../components/Services/UIUXFeatures";
import OurWork from "../../../components/Services/OurWork";
const Service = () => {
  const location = useLocation();
  const { service } = location.state;

  return (
    <>
      <Navbar />
      <div
        className="bg-cover bg-center h-[50vh] sm:h-[70vh] font-plus text-white flex justify-center items-center text-center px-6 sm:px-16 lg:px-56"
        style={{ backgroundImage: `url(${bg})` }}></div>
      <div
        className={`relative bottom-48 mx-20  bg-white p-2 rounded-2xl flex flex-col sm:flex-row gap-5 items-center justify-center shadow-lg`}>
        <div className="flex items-center justify-center sm:w-1/2 overflow-hidden">
          <div className="relative w-full max-w-[300px] sm:max-w-[400px]">
            <img
              alt={`${service.service} image`}
              src={dribbleShot}
              className="w-full h-72 sm:h-96 object-cover rounded-lg  transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>

        <div className="flex flex-col sm:w-1/2 text-center sm:text-left">
          <h3 className="text-3xl sm:text-5xl font-semibold text-gray-800 mb-3">
            {service.service}
          </h3>
          <p className="text-sm sm:text-base text-gray-600 mb-4">
            Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Class aptent taciti sociosqu ad litora torquent
            per conubia nostra, per inceptos himenaeos.
          </p>
        </div>
      </div>

      <div className=" mx-4 md:mx-20">
        <UIUXFeatures />
      </div>
      <div className="mt-5 mb-10  mx-4 md:mx-20">
        <OurWork service={service} />
      </div>
      <div className="mb-10  mx-4 md:mx-20">
        <ContactForm />
      </div>

      <Footer />
    </>
  );
};

export default Service;
