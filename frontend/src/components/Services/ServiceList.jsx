import React from "react";
import { FaArrowRight } from "react-icons/fa"; // Import right arrow icon
import dribbleShot from "../../assets/images/Dribbbleshot.png";

const ServiceList = () => {
  const services = [
    {
      id: 1,
      service: "Web Site Design and Development",
    },
    {
      id: 2,
      service: "App Development",
    },
    {
      id: 3,
      service: "Digital Marketing",
    },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6">
      {services.map((service, index) => (
        <div
          key={service.id}
          className={`mb-10 flex flex-col sm:flex-row gap-5 items-center justify-center mx-auto ${
            index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
          }`}>
          {/* Image Section */}
          <div className="flex items-center justify-center sm:w-1/2 overflow-hidden">
            <div className="relative w-full max-w-[300px] sm:max-w-[400px]">
              <img
                alt={`${service.service} image`}
                src={dribbleShot}
                className="w-full h-72 sm:h-96 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
              />
              <div
                className="bg-[#F5B22B] absolute bottom-0 left-0 flex items-center justify-center rounded-full transition-all duration-300 transform hover:scale-110"
                style={{
                  width: "120px",
                  height: "120px",
                  marginLeft: "-20px",
                  marginBottom: "0px",
                }}>
                <p className="text-black font-semibold text-sm text-center">
                  View Projects
                </p>
              </div>
            </div>
          </div>

          {/* Service Description Section */}
          <div className="flex flex-col sm:w-1/2 text-center sm:text-left">
            <h3 className="text-3xl sm:text-5xl font-semibold text-gray-800 mb-3">
              {service.service}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 mb-4">
              Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos.
            </p>
            {/* View Details Button with Right Arrow */}
            <button className="inline-flex items-center text-[#F5B22B] font-semibold hover:text-[#C5911A] transition-all duration-300">
              View Details
              <FaArrowRight className="ml-2 text-xl" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceList;
