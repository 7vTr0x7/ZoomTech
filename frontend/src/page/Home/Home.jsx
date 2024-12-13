import React from "react";
import Navbar from "../../components/Navbar";
import bg from "../../assets/images/Background.png";
import HeroSection from "../../components/home/HeroSection";
import Services from "../../components/home/Services";
import Projects from "../../components/home/Projects";
import Reviews from "../../components/home/Reviews";

const Home = () => {
  return (
    <div
      className="bg-cover bg-center h-full font-plus"
      style={{ backgroundImage: `url(${bg})` }}>
      <Navbar />
      <HeroSection />
      <Services />
      <Projects />
      <Reviews />
    </div>
  );
};

export default Home;
