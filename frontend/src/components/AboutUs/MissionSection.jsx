import React from "react";

const MissionSection = () => {
  return (
    <section className="bg-[#281A00] text-white py-16 px-4 md:py-44 md:px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="space-y-6">
          <h4 className="text-yellow-400 text-lg font-semibold mb-2">
            Our Mission
          </h4>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Boost your with <br /> your business.
          </h2>
          <p className="text-gray-400 mb-4 text-sm md:text-base leading-relaxed">
            He moonlights difficult engrossed it, sportsmen. Interested has all
            Devonshire difficulty gay assistance joy.
          </p>
          <div className="grid grid-cols-2 gap-y-4 text-xs md:text-sm text-gray-300">
            <p className="flex items-center gap-2">
              🟡 <span>Moonlight newspaper up its enjoyment</span>
            </p>
            <p className="flex items-center gap-2">
              🟡 <span>Rooms oh fully taken by worse</span>
            </p>
            <p className="flex items-center gap-2">
              🟡 <span>She new course gets living</span>
            </p>
            <p className="flex items-center gap-2">
              🟡 <span>She new course gets living</span>
            </p>
            <p className="flex items-center gap-2">
              🟡 <span>Perceived end certainly day</span>
            </p>
            <p className="flex items-center gap-2">
              🟡 <span>Preference any astonished unreserved Mrs.</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-6 md:flex-row md:gap-4">
          <div className="rounded-lg h-auto overflow-hidden md:relative w-full md:w-2/5 md:bottom-20 text-center">
            <div className="flex justify-center ">
              <img
                src="https://placehold.co/500x500"
                alt="Team"
                className="object-cover rounded-lg h-64 md:h-80"
              />
            </div>
            <div className="flex gap-4 h-32 md:h-44 items-center justify-center">
              <div className="flex flex-col items-center">
                <p className="text-3xl md:text-4xl font-bold">10k</p>
                <p className="text-gray-400 text-xs md:text-sm text-center">
                  Great conversations per month
                </p>
              </div>

              <div className="h-12 md:h-20 w-px bg-gray-300 border border-gray-500"></div>

              <div className="flex flex-col items-center relative top-2 md:top-10">
                <p className="text-3xl md:text-4xl font-bold">95+</p>
                <p className="text-gray-400 text-xs md:text-sm text-center">
                  Projects Complete
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden h-64 md:h-80 flex justify-center md:w-1/2">
            <img
              src="https://placehold.co/500x500"
              alt="Meeting"
              className="object-cover h-full rounded-lg "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
