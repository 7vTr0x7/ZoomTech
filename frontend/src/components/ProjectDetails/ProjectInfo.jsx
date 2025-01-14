import React from "react";

const ProjectInfo = () => {
  return (
    <div className="bg-white py-8 ">
      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Section */}
        <div>
          <div className="mb-8">
            <h2 className="text-xl font-bold text-[#F5B22B]">Project Name</h2>
            <p className="text-3xl font-semibold text-gray-900 mt-2">
              Website Design for traders
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-[#F5B22B]">Service</h2>
            <p className="text-2xl text-black mt-2">UX UI Design</p>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h2 className="text-xl font-bold text-[#F5B22B]">Project Info</h2>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-12 grid grid-cols-2 gap-4">
        <div className="rounded-md overflow-hidden">
          <div className="w-full md:h-80 h-44 bg-gray-300 flex items-center justify-center">
            <span className="text-gray-500">Image Placeholder 1</span>
          </div>
        </div>
        <div className=" rounded-md overflow-hidden">
          <div className="w-full md:h-80 h-44 bg-gray-300 flex items-center justify-center">
            <span className="text-gray-500">Image Placeholder 2</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
