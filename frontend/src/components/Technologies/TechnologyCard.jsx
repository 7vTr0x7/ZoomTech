import React from "react";

const TechnologyCard = ({ logo, name, description }) => {
  return (
    <div className="flex flex-col sm:flex-row bg-gray-900 text-white rounded-lg shadow-lg overflow-hidden border border-gray-700 sm:h-64">
      {/* Logo Section */}
      <div className="flex items-center justify-center w-full sm:w-1/4 bg-white p-4">
        <img
          src={logo}
          alt={`${name} logo`}
          className="w-32 h-32 md:w-44 md:h-44 object-contain"
        />
      </div>
      {/* Content Section */}
      <div className="w-full sm:w-3/4 p-4 sm:p-6 bg-gray-800 flex flex-col justify-center">
        <h4 className="text-yellow-400 text-sm uppercase font-bold mb-2">
          Technology Name
        </h4>
        <h2 className="text-xl sm:text-2xl font-bold mb-3">{name}</h2>
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TechnologyCard;
