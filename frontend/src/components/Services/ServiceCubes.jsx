import React from "react";

import cube1 from "../../assets/images/serviceCube1.png";
import cube2 from "../../assets/images/serviceCube2.png";
import cube3 from "../../assets/images/serviceCube3.png";
import cube4 from "../../assets/images/serviceCube4.png";

const ServiceCubes = () => {
  return (
    <div className="flex items-center justify-center relative md:bottom-32 bottom-20">
      <img
        alt="cube1"
        src={cube1}
        className="h-36 md:h-80 relative left-20 md:left-48 md:bottom-5"
      />
      <img
        alt="cube2"
        src={cube2}
        className="h-36 md:h-80 relative left-9 md:left-20"
      />
      <img
        alt="cub32"
        src={cube3}
        className="h-36 md:h-80 relative md:right-7  right-3"
      />
      <img
        alt="cube4"
        src={cube4}
        className="h-36 md:h-80 relative md:right-36 right-14"
      />
    </div>
  );
};

export default ServiceCubes;
