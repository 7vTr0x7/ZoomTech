import React from "react";
import bg from "../../assets/images/servicesBg.png";

const ServicesHeader = () => {
  return (
    <div
      className="bg-cover bg-center h-[50vh] sm:h-[80vh] font-plus text-white flex justify-center items-center text-center px-6 sm:px-16 lg:px-56"
      style={{ backgroundImage: `url(${bg})` }}>
      <div>
        <div className="mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold flex items-center justify-center mt-16">
          <p className="relative p-4 text-black rounded-xl">
            <span
              className="absolute inset-0 bg-[#E3AB39] rounded-xl z-0"
              style={{ transform: "skewX(-7deg)" }}></span>
            <span className="relative z-10">Our</span>
          </p>

          <p className="relative right-3">Services</p>
        </div>
        <p className="text-base sm:text-lg lg:text-xl">
          Katalyst Design Studio is a dynamic and innovative design agency that
          brings creative ideas to life. We work with a wide range of clients to
          develop unique and effective branding, web design, and graphic design
          solutions.
        </p>
      </div>
    </div>
  );
};

export default ServicesHeader;
