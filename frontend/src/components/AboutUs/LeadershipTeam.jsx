import React from "react";

const teamMembers = [
  {
    name: "Jenny Wilson",
    title: "Viverra ut potenti",
    img: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "Floyd Miles",
    title: "Viverra ut potenti",
    img: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Cameron Williamson",
    title: "Viverra ut potenti",
    img: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Dianne Russell",
    title: "Viverra ut potenti",
    img: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    name: "Leslie Alexander",
    title: "Viverra ut potenti",
    img: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    name: "Esther Howard",
    title: "Viverra ut potenti",
    img: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const LeadershipTeam = () => {
  return (
    <section className=" py-16 px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">
          Our Leadership Team
        </h2>
        <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
          Interdum ac tincidunt molestie facilisis. Nulla at erat odio bibendum
          diam quam. Scelerisque mus vel egestas justo, purus consequat nibh
          eget. Non risus feugiat porta integer.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            <img
              src={member.img}
              alt={member.name}
              className="w-32 h-32 object-cover rounded-full mx-auto shadow-lg"
            />
            <h3 className="mt-4 text-lg font-semibold text-gray-900">
              {member.name}
            </h3>
            <p className="text-gray-500">{member.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LeadershipTeam;
