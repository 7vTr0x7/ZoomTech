import React from "react";
import Navbar from "../../components/Navbar";
import bg from "../../assets/images/Background.png";
import HeroSection from "../../components/home/HeroSection";

const Home = () => {
  return (
    <div
      className="bg-cover bg-center h-screen font-plus"
      style={{ backgroundImage: `url(${bg})` }}>
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default Home;
