import React from "react";

import image from "../../assets/unsplash1.png";

const JoinTeamSection = () => {
  return (
    <section className="py-16 px-4 md:pr-16 w-full">
      <div className="mx-auto flex flex-col md:flex-row items-center gap-8 bg-gray-100">
        <div className="w-full md:w-1/2 px-4 md:px-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Join a global team of change-makers.
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Viverra ut potenti aliquam faucibus dui imperdiet laoreet tempus
            sed. Efficursus est lorem nisi.
          </p>
          <button className="mt-4 md:mt-6 bg-yellow-400 text-gray-900 py-2 px-4 rounded-3xl w-full md:w-auto">
            Contact Us
          </button>
        </div>
        <div className="w-full md:w-1/2">
          <img
            src={image}
            alt="Change Makers"
            className="rounded-lg shadow-lg object-cover w-full h-64 md:h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default JoinTeamSection;
