import React from "react";

import serviceCardImg from "../../assets/images/serviceCard.png";

const Services = () => {
  return (
    <div className="bg-black mx-3 rounded-3xl pt-10 pb-16 mt-16 mb-5">
      <p className="text-[#F5B22B] text-center text-xl mt-5">
        Services we provide
      </p>
      <p className="text-4xl font-medium text-white px-16 mt-6 text-center">
        Real-world examples of how we have helped companies achieve their
        marketing objectives.
      </p>

      <div className="flex items-center gap-4 md:px-10 px-3 overflow-x-auto mt-10 scrollbar-hide">
        {["UI/UX Design", "Digital Marketing", "non", "non", "non", "non"].map(
          (service, index) => (
            <div key={index} className="shrink-0 relative">
              <img alt={service} src={serviceCardImg} className="w-64" />
              <p className="absolute bottom-4 left-4 text-3xl font-medium text-white ">
                {service}
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Services;
