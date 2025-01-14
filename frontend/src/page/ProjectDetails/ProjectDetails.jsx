import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Breadcrumb from "../../components/Breadcrumb";
import projectDetails from "../../assets/images/projectDetail.png";
import ProjectInfo from "../../components/ProjectDetails/ProjectInfo";
import OurWork from "./../../components/ProjectDetails/OurWork";
import ContactForm from "../../components/ContactUs/ContactForm";
const ProjectDetails = () => {
  return (
    <div>
      {" "}
      <Navbar />
      <div className="mt-28">
        <div className=" mx-4 md:mx-20">
          <Breadcrumb />
        </div>
        <div className="mt-10  mx-4 md:mx-20">
          <img alt="project" src={projectDetails} />
        </div>
        <div className="mt-10  mx-4 md:mx-20 border-b-2 pb-10">
          <ProjectInfo />
        </div>
        <div className="mt-10  mx-4 md:mx-20 ">
          <OurWork />
        </div>
        <div className="mb-10  mx-4 md:mx-20">
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetails;
