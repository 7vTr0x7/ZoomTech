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
        <p className="text-xs text-gray-600 leading-relaxed">
          We are a passionate team of digital marketing enthusiasts dedicated to
          helping businesses succeed in the digital world. With years of
          experience and a deep understanding of the ever-evolving online
          landscape, we stay at the forefront of industry trends and
          technologies.
        </p>
      </div>

      <div className="flex items-center justify-between mt-8">
        <div className="flex flex-wrap gap-5">
          <button className="px-10 py-1 rounded-3xl text-sm font-semibold hover:bg-[#FFD277] hover:text-black text-[#FFD277] border border-[#FFD277]">
            All Work [20]
          </button>
          <button className="px-10 py-1 rounded-3xl text-sm font-semibold hover:bg-[#FFD277] hover:text-black text-[#FFD277] border border-[#FFD277]">
            UI/UX Design [20]
          </button>
          <button className="px-10 py-1 rounded-3xl text-sm font-semibold hover:bg-[#FFD277] hover:text-black text-[#FFD277] border border-[#FFD277]">
            Digital Marketing [20]
          </button>
          <button className="px-10 py-1 rounded-3xl text-sm font-semibold hover:bg-[#FFD277] hover:text-black text-[#FFD277] border border-[#FFD277]">
            Branding [20]
          </button>
        </div>
        <div className="flex gap-5 text-2xl items-center">
          <BsArrowLeftCircle />
          <BsArrowRightCircle />
        </div>
      </div>

      <div className="flex items-center overflow-x-auto mt-10 scrollbar-hide">
        <div className="relative inline-block min-w-[400px]">
          <img alt="image" src={dribbleShot} className="h-96 object-cover" />
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

        <div className="relative inline-block min-w-[400px]">
          <img alt="image" src={dribbleShot1} className="h-96 object-cover" />
        </div>
        <div className="relative inline-block min-w-[400px]">
          <img alt="image" src={dribbleShot1} className="h-96 object-cover" />
        </div>
        <div className="relative inline-block min-w-[400px]">
          <img alt="image" src={dribbleShot1} className="h-96 object-cover" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
