import React from "react";
import ContactForm from "../../components/ContactUs/ContactForm";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

import bg from "../../assets/images/servicesBg.png";
import code from "../../assets/images/code.png";
import TechnologyCard from "../../components/Technologies/TechnologyCard";

const Technologies = () => {
  const technologies = [
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png",
      name: "Flutter",
      description:
        "A UI toolkit by Google for building natively compiled applications for mobile, web, and desktop from a single codebase.",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
      name: "React",
      description:
        "A JavaScript library for building user interfaces, developed by Facebook. It's known for its component-based architecture.",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
      name: "Node.js",
      description:
        "A JavaScript runtime built on Chrome's V8 JavaScript engine, designed for building scalable network applications.",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
      name: "Python",
      description:
        "A versatile, high-level programming language that emphasizes code readability and supports multiple paradigms.",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Android_logo_2019_%28stacked%29.svg",
      name: "Android",
      description:
        "An open-source mobile operating system developed by Google, used for developing apps for millions of devices worldwide.",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
      name: "Next.js",
      description:
        "A React-based framework for building fast, server-rendered, and statically generated web applications.",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
      name: "Figma",
      description:
        "A web-based design tool that enables teams to collaborate in real time to create user interfaces and prototypes.",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
      name: "JavaScript",
      description:
        "A versatile programming language that allows developers to create interactive and dynamic content on websites.",
    },
    {
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
      name: "Git",
      description:
        "A distributed version control system for tracking changes in source code during software development.",
    },
  ];

  return (
    <div>
      <Navbar />
      <div
        className="bg-cover relative bg-center h-[50vh] md:h-[75vh] font-plus text-white pt-20 px-4 sm:px-8"
        style={{ backgroundImage: `url(${bg})` }}>
        <div className="absolute right-0 md:block hidden">
          <img alt="code" src={code} />
        </div>
        <div className="flex flex-col gap-5 justify-center h-full w-full sm:w-3/4 md:w-2/3 text-center sm:text-left px-4 sm:px-20">
          <p className="text-3xl sm:text-4xl md:text-6xl font-bold">
            <span className="text-[#F5B22B]">Technologies</span> we use
          </p>
          <p className="text-sm sm:text-base md:text-lg">
            Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
        </div>
      </div>
      <div className="mt-28">
        <div className="mb-10 mx-4 sm:mx-8 md:mx-20">
          <div className=" flex flex-col gap-6">
            {technologies.map((tech, index) => (
              <TechnologyCard
                key={index}
                logo={tech.logo}
                name={tech.name}
                description={tech.description}
              />
            ))}
          </div>
        </div>
        <div className="mb-10 mx-4 sm:mx-8 md:mx-20">
          <ContactForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Technologies;
