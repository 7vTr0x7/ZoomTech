import React from "react";

const AboutUsHeader = () => {
  return (
    <div className="bg-yellow-50 py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div className="text-left pr-4 border-r-2 border-gray-300">
          <h2 className="text-4xl font-bold text-gray-900">
            You guessed it. We’re changing the game.
          </h2>
        </div>
        <div className="text-left pl-4">
          <p className="text-gray-600 text-lg leading-relaxed">
            Semper bibendum nisl, fermentum mi convallis. Sed vitae tincidunt
            nunc, aliquam orci. Porttitor faucibus morbi sed senectus justo,
            adipiscing augue.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsHeader;
