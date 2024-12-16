import React from "react";
import { FiArrowRight } from "react-icons/fi";

const Banner = () => {
  return (
    <div className="px-4 mb-10 text-white">
      <div className="bg-black py-10 rounded-xl px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-3xl md:text-5xl lg:text-7xl font-medium text-center md:text-left">
          Ready to work with us?
        </p>
        <button
          className="ml-0 md:ml-4 px-4 md:px-6 py-2 border border-white rounded-full text-black flex items-center justify-center gap-4 bg-white hover:bg-gray-200 focus:ring-2 focus:ring-white"
          aria-label="Get Started">
          <span>Get Started</span>
          <FiArrowRight className="text-lg" />
        </button>
      </div>
    </div>
  );
};

export default Banner;
