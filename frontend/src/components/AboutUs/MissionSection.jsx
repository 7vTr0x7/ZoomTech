import React from "react";

const MissionSection = () => {
  return (
    <section className="bg-[#281A00] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h4 className="text-yellow-400 text-lg font-semibold mb-2">
            Our Mission
          </h4>
          <h2 className="text-5xl font-bold mb-6 leading-tight">
            Boost your with <br /> your business.
          </h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            He moonlights difficult engrossed it, sportsmen. Interested has all
            Devonshire difficulty gay assistance joy.
          </p>
          <div className="grid grid-cols-2 gap-y-4 text-gray-300">
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
              🟡 <span>Perceived end certainly day</span>
            </p>
            <p className="flex items-center gap-2">
              🟡 <span>Preference any astonished unreserved Mrs.</span>
            </p>
          </div>
          <div className="flex gap-12 mt-8">
            <div>
              <p className="text-4xl font-bold">10k</p>
              <p className="text-gray-400 text-sm">
                Great conversations per month
              </p>
            </div>
            <div>
              <p className="text-4xl font-bold">95+</p>
              <p className="text-gray-400 text-sm">Projects Complete</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="rounded-lg overflow-hidden w-1/2">
            <img
              src="https://via.placeholder.com/500x500"
              alt="Team"
              className="object-cover h-full"
            />
          </div>
          <div className="rounded-lg overflow-hidden w-1/2">
            <img
              src="https://via.placeholder.com/500x500"
              alt="Meeting"
              className="object-cover h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
