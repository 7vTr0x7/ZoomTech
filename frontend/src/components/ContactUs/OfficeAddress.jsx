import React from "react";

const OfficeAddress = () => {
  return (
    <div className="flex flex-col md:flex-row bg-[#FFF6E5] p-6 rounded-3xl  items-center">
      <div className="md:w-1/2 mb-6 md:mb-0">
        <h2 className="text-2xl font-bold mb-4">Office Address</h2>
        <p className="text-gray-700">
          Porem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio matti.
        </p>
      </div>
      <div className="md:w-1/2  rounded-3xl">
        <img
          src="https://placehold.co/300x300"
          alt="Map"
          className="w-full h-96 rounded-3xl"
        />
      </div>
    </div>
  );
};

export default OfficeAddress;
