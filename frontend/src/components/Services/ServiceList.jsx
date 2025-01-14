import React from "react";
import { GoArrowRight } from "react-icons/go";
import dribbleShot from "../../assets/DribbbleShot.png";

import { useNavigate } from "react-router-dom";

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
    {
      id: 4,
      service: "UI/UX Design",
    },
  ];

  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 sm:px-6">
      {services.map((service, index) => (
        <div
          key={service.id}
          className={`mb-10 flex flex-col sm:flex-row gap-5 items-center justify-center mx-auto ${
            index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
          }`}>
          <div className="flex items-center justify-center sm:w-1/2 overflow-hidden">
            <div className="relative w-full max-w-[300px] sm:max-w-[400px]">
              <img
                alt={`${service.service} image`}
                src={dribbleShot}
                className="w-full h-72 sm:h-96 object-cover rounded-lg  transition-transform duration-300 hover:scale-105"
              />
              <div
                className="bg-[#F5B22B] absolute bottom-0 left-0 flex items-center justify-center rounded-full transition-all duration-300 transform hover:scale-110
             w-[80px] h-[80px] ml-[0px] mb-[0px]
             sm:w-[100px] sm:h-[100px] sm:ml-[0px]
             md:w-[120px] md:h-[120px] md:ml-[-20px] md:mb-[0px]">
                <p
                  className="text-black font-semibold text-xs sm:text-sm text-center"
                  onClick={() =>
                    navigate(`/services/${service.service}/project-details`, {
                      state: { service },
                    })
                  }>
                  View Projects
                </p>
              </div>
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
              inceptos himenaeos. Class aptent taciti sociosqu ad litora
              torquent per conubia nostra, per inceptos himenaeos.
            </p>

            <button
              className="inline-flex items-center justify-center mt-4 md:mt-6 bg-black text-white py-2 px-4 rounded-3xl w-fit mx-auto md:mx-0"
              onClick={() =>
                navigate(`/services/${service.service}`, {
                  state: { service },
                })
              }>
              <span className="mr-6 font-medium">View Details</span>
              <GoArrowRight className="text-xl" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceList;
