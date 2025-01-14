import React from "react";
import { FaStar } from "react-icons/fa";

const UIUXFeatures = () => {
  const features = [
    {
      title: "Clean and Elegant Typography of UI",
      description:
        "Think of clean and elegant typography of your website as Spice Girls, where each font bring its own flavour in the spotlight and garnishes the UI/UX meal with elegance and neatness.",
    },
    {
      title: "Effective UI Colour Scheme Selection",
      description:
        "Colours are like the emotional ninjas, where every hue is chosen with Picasso-like precision by our UI/UX experts, creating a fashion statement of your brand in the most effective way.",
    },
    {
      title: "Whitespace Efficiency to Maintain at All Places",
      description:
        "As a UI/UX designing company in Thane, we create a galaxy where less space is more and offers a spa day to every pixel, sparing the visitors from digital claustrophobia attack.",
    },
    {
      title: "Engaging Elements That Adds Spark",
      description:
        "Visualise your website as a box and engaging elements like CTA buttons, forms, etc., as a gift wrapped in it. With every click, the users get to uncover the surprise hints and interact with them.",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-8 bg-white border-b-2 pb-20">
      {features.map((feature, index) => (
        <div key={index}>
          <div className="p-3 bg-yellow-100 rounded-xl inline-block">
            <FaStar className="text-yellow-500 text-xl" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UIUXFeatures;
