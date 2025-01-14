import React from "react";

import arrow1 from "../../assets/arrow1.png";
import laptopImage from "../../assets/Rectangle.png";
import company1 from "../../assets/Company1.png";
import company2 from "../../assets/Company2.png";
import company3 from "../../assets/Company3.png";
import bars from "../../assets/group1.png";

import { LuArrowRight } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-24 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-7 flex flex-col justify-between r">
          <p className="text-3xl sm:text-4xl md:text-6xl font-semibold text-black pr-0 sm:pr-4 md:pr-8">
            Stay ahead of the curve with our forward-thinking
          </p>

          <p className="text-[#878C91] pr-0 sm:pr-4 md:pr-44">
            An award-winning SEO agency with disciplines in digital marketing,
            design, and website development. focused on understanding you.
          </p>
        </div>
        <div className="md:col-span-5 mt-10">
          <div className="flex flex-col gap-8">
            <div className="flex items-center flex-row md:items-center gap-6 relative">
              <div className="relative w-full md:w-7/12 h-full">
                <div className="w-full h-full flex justify-center items-center">
                  <img
                    alt="Laptop showcasing innovation"
                    src={laptopImage}
                    className="object-contain max-w-[200px] sm:max-w-[300px] md:max-w-full max-h-full rounded-lg"
                  />
                </div>
                <img
                  alt="Decorative arrow pointing to innovation"
                  src={arrow1}
                  className="absolute top-[-30px]  left-[35%]  md:left-[40%] h-[130px]  md:h-[150px]"
                />
              </div>

              <div className="bg-[#F0F0F0] px-4 sm:px-6 py-4 rounded-xl flex flex-col gap-5 w-full md:w-5/12 md:min-h-[230px] min-h-[180px]">
                <p className="text-3xl sm:text-4xl md:text-6xl text-black font-extrabold">
                  230+
                </p>
                <p className="text-sm md:text-sm text-[#5C5D5F]  leading-6">
                  Some big companies that we work with, and trust us very much.
                </p>
                <div className="h-[1px] sm:h-[2px] bg-black"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-5">
        <div className="md:col-span-7 col-span-12 flex flex-col justify-between">
          <div className="flex items-center gap-14 mt-5">
            <button
              className=" flex items-center gap-8 px-6 py-2 border bg-black text-white rounded-3xl transition duration-300"
              onClick={() => navigate("/contact-us")}>
              <p>Contact us</p>
              <LuArrowRight className="text-lg" />
            </button>
            <p
              className="underline text-sm font-medium cursor-pointer"
              onClick={() => navigate("/services")}>
              View Services
            </p>
          </div>

          <div className="flex items-center gap-16 md:mt-0 mt-3">
            <div className="text-sm font-medium">
              <p> {`Trusted by the world's `}</p>
              <p> {`biggest brands`}</p>
            </div>
            <div className="flex flex-wrap items-center gap-5">
              <img alt="company1" src={company1} />
              <img alt="company2" src={company2} />
              <img alt="company3" src={company3} />
            </div>
          </div>
        </div>
        <div className="md:col-span-5 col-span-12  w-full">
          <img alt="stats" src={bars} className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
