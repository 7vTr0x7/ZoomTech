import React from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const SEOServiceCards = () => {
  const cardData = [
    {
      id: 1,
      color: "bg-blue-500",
      title: "How a Digital Marketing Agency Can Boost Your Business",
      description:
        "We are the top digital marketing agency for branding corp. We offer a full range engine ....",
    },
    {
      id: 2,
      color: "bg-red-500",
      title: "The Latest Trends and Strategies with a Digital Marketing Agency",
      description:
        "Working with this digital marketing agency has been a true partnership. They have tak....",
    },
    {
      id: 3,
      color: "bg-purple-500",
      title: "Maximizing ROI with the Expertise of a Digital Marketing Agency",
      description:
        "What sets this digital marketing agency apart is their commitment to transparency a....",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="px-20 md:mx-auto md:grid md:grid-cols-2 md:gap-8 md:items-center">
        <div>
          <h1 className="text-4xl md:text-[40px] font-semibold text-gray-800 mb-4">
            Digital Marketing & SEO Services That Grow Traffic & Increase
            Revenue
          </h1>
        </div>
        <div>
          <p className="text-gray-500 mb-6">
            We are the top digital marketing agency for branding corp. We offer
            a full range of services to help clients improve their search engine
            rankings and drive more traffic to their websites.
          </p>
          <button className="px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition">
            See more
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 px-20 md:mx-auto">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-xl shadow-md py-6 px-3 relative flex flex-col hover:shadow-lg transition">
            <div
              className={`absolute top-4 left-4 w-2.5 h-2.5 rounded-full ${card.color}`}></div>
            <div className="text-gray-400 text-sm absolute top-4 right-4">
              5 min read
            </div>

            <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-3 pr-14">
              {card.title}
            </h3>

            {/* Spacer to push content to the bottom */}
            <div className="flex-grow"></div>

            <div className="flex justify-between items-center mt-auto">
              <p className="text-gray-500 text-sm">{card.description}</p>
              <div className="ml-4 px-6 py-2 border border-black rounded-full hover:bg-black hover:text-white transition">
                <FiArrowRight className="text-lg text-black font-normal" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SEOServiceCards;
