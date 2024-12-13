import React from "react";
import serviceCardImg from "../../assets/images/serviceCard.png";

const Services = () => {
  return (
    <div className="bg-black mx-4 rounded-3xl pt-10 pb-16 mt-16 mb-5">
      <p className="text-[#F5B22B] text-center text-lg md:text-xl mt-5">
        Services we provide
      </p>
      <p className="text-2xl md:text-4xl font-medium text-white px-6 md:px-16 mt-6 text-center">
        Real-world examples of how we have helped companies achieve their
        marketing objectives.
      </p>

      <div className="flex items-center gap-4 px-3 md:px-10 overflow-x-auto mt-10 scrollbar-hide">
        {[
          "UI/UX Design",
          "Digital Marketing",
          "Web Development",
          "SEO Optimization",
          "Content Creation",
          "Brand Strategy",
        ].map((service, index) => (
          <div
            key={index}
            className="shrink-0 relative w-48 md:w-64 rounded-xl overflow-hidden">
            <img
              alt={service}
              src={serviceCardImg}
              className="w-full h-48 md:h-64 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 flex items-end p-4">
              <p className="text-lg md:text-2xl font-medium text-white">
                {service}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
