import React from "react";
import { useNavigate } from "react-router-dom";

const OurWork = () => {
  const navigate = useNavigate();

  const projects = [
    { id: 1, name: "Project Alpha" },
    { id: 2, name: "Project Beta" },
    { id: 3, name: "Project Gamma" },
    { id: 4, name: "Project Delta" },
  ];

  return (
    <div>
      {" "}
      {/* Left Section */}
      <div className="w-full md:w-1/3 mb-8 md:mb-0 text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-800">Our Other Projects</h2>
      </div>
      {/* Right Section */}
      <div className="flex flex-col md:flex-row items-start md:space-x-8 py-12 px-6">
        <div className="w-full  grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-200 w-full h-80 rounded-lg flex items-center justify-center text-gray-500 cursor-pointer hover:shadow-lg transition-shadow">
              <span>{project.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurWork;
