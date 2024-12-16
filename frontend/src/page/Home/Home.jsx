import React from "react";
import bg from "../../assets/images/Background.png";
import FAQSection from "../../components/home/FAQSection";
import HeroSection from "../../components/home/HeroSection";
import Projects from "../../components/home/Projects";
import Reviews from "../../components/home/Reviews";
import Services from "../../components/home/Services";
import Navbar from "../../components/Navbar";
import SEOServiceCards from "../../components/home/SEOServiceCards";
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
      <FAQSection />
      <SEOServiceCards />
    </div>
  );
};

export default Home;
