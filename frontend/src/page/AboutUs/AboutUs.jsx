import React from "react";
import AboutUsHeader from "../../components/AboutUs/AboutUsHeader";
import LeadershipTeam from "../../components/AboutUs/LeadershipTeam";
import MissionSection from "../../components/AboutUs/MissionSection";
import JoinTeamSection from "../../components/AboutUs/JoinTeamSection";
import Navbar from "../../components/Navbar";
import bg from "../../assets/images/Background.png";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactUs/ContactForm";

const AboutUs = () => {
  return (
    <div
      className="bg-cover bg-center h-full font-plus"
      style={{ backgroundImage: `url(${bg})` }}>
      <Navbar />
      <div className="text-center my-8">
        <p className="text-3xl font-bold">About US</p>
        <p className="mt-2">Pulvinar auctor nisl, volutpat turpis enim id.</p>
      </div>

      <AboutUsHeader />
      <LeadershipTeam />
      <MissionSection />
      <JoinTeamSection />
      <div className="my-10 mx-4 md:mx-20">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
