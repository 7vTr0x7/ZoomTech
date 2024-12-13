import React from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";

import dribbleShot from "../../assets/images/DribbbleShot.png";
import dribbleShot1 from "../../assets/images/Dribbbleshot1.png";

const Projects = () => {
  return (
    <div className="py-5 px-6 md:px-16 mt-5">
      <div className="grid md:grid-cols-2 gap-6 items-center">
        <p className="font-semibold text-xl md:text-3xl text-gray-800">
          Our Projects
        </p>
        <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
          We are a passionate team of digital marketing enthusiasts dedicated to
          helping businesses succeed in the digital world. With years of
          experience and a deep understanding of the ever-evolving online
          landscape, we stay at the forefront of industry trends and
          technologies.
        </p>
      </div>

      <div className="flex flex-wrap gap-5 justify-center md:justify-between mt-8">
        <button className="px-8 py-2 sm:px-10 sm:py-1 rounded-3xl text-sm sm:text-base font-semibold hover:bg-[#FFD277] hover:text-black text-[#FFD277] border border-[#FFD277]">
          All Work [20]
        </button>
        <button className="px-8 py-2 sm:px-10 sm:py-1 rounded-3xl text-sm sm:text-base font-semibold hover:bg-[#FFD277] hover:text-black text-[#FFD277] border border-[#FFD277]">
          UI/UX Design [20]
        </button>
        <button className="px-8 py-2 sm:px-10 sm:py-1 rounded-3xl text-sm sm:text-base font-semibold hover:bg-[#FFD277] hover:text-black text-[#FFD277] border border-[#FFD277]">
          Digital Marketing [20]
        </button>
        <button className="px-8 py-2 sm:px-10 sm:py-1 rounded-3xl text-sm sm:text-base font-semibold hover:bg-[#FFD277] hover:text-black text-[#FFD277] border border-[#FFD277]">
          Branding [20]
        </button>
      </div>

      <div className="flex items-center justify-center gap-10 text-2xl mt-8">
        <BsArrowLeftCircle />
        <BsArrowRightCircle />
      </div>

      <div className="flex items-center overflow-x-auto mt-10 scrollbar-hide space-x-3 sm:space-x-4">
        <div className="relative inline-block min-w-[300px] sm:min-w-[400px]">
          <img
            alt="image"
            src={dribbleShot}
            className="h-72 sm:h-96 object-cover"
          />
          <div
            className="bg-[#F5B22B] absolute px-5 py-12 rounded-full text-center text-white"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}>
            <p className="text-black font-semibold">See Details</p>
          </div>
        </div>

        <div className="relative inline-block min-w-[300px] sm:min-w-[400px]">
          <img
            alt="image"
            src={dribbleShot1}
            className="h-72 sm:h-96 object-cover"
          />
          <div className="absolute text-sm top-5 left-6 md:top-8 md:left-10 text-white flex items-center gap-2">
            <div className="h-[2px] w-10 bg-[#FFFFFF]"></div>
            <p>Ai Corporation. 2023</p>
          </div>
          <div className="absolute bottom-5 left-5 md:bottom-8 md:left-10 text-white flex items-center gap-2">
            <p>Ai Wave - Ai Chatbot Mobile App</p>
          </div>
        </div>
        <div className="relative inline-block min-w-[300px] sm:min-w-[400px]">
          <img
            alt="image"
            src={dribbleShot1}
            className="h-72 sm:h-96 object-cover"
          />
          <div className="absolute text-sm top-5 left-6 md:top-8 md:left-10 text-white flex items-center gap-2">
            <div className="h-[2px] w-10 bg-[#FFFFFF]"></div>
            <p>Lancer Corporation. 2023</p>
          </div>
          <div className="absolute bottom-5 left-5 md:bottom-8 md:left-10 text-white flex items-center gap-2">
            <p>App Lancer - Freelance Mobile App</p>
          </div>
        </div>
        <div className="relative inline-block min-w-[300px] sm:min-w-[400px]">
          <img
            alt="image"
            src={dribbleShot1}
            className="h-72 sm:h-96 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
