import React from "react";
import Navbar from "../../components/Navbar";
import bg from "../../assets/images/Background.png";

const Home = () => {
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${bg})` }}>
      <Navbar />
    </div>
  );
};

export default Home;
