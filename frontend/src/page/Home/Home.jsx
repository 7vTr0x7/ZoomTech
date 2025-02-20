import React from "react";
import bg from "../../assets/Background.png";
import FAQSection from "../../components/home/FAQSection";
import HeroSection from "../../components/home/HeroSection";
import Projects from "../../components/home/Projects";
import Reviews from "../../components/home/Reviews";
import Services from "../../components/home/Services";
import Navbar from "../../components/Navbar";
import SEOServiceCards from "../../components/home/SEOServiceCards";
import Banner from "../../components/home/Banner";
import Footer from "../../components/Footer";
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
      <Banner />
      <Footer />
    </div>
  );
};

export default Home;
