import React, { useState } from "react";
import logo from "../assets/logo.png";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="absolute top-0 left-0 w-full h-20   px-4 lg:px-16 z-50">
      <div className="container mx-auto flex justify-between items-center h-full bg-white shadow-lg px-12 rounded-b-lg">
        <div className="flex items-center gap-14">
          <div
            className="flex items-center gap-1 cursor-pointer"
            onClick={() => navigate("/")}>
            <img alt="Zoom Tech Logo" src={logo} className="h-6 w-6" />
            <span className="font-semibold text-lg">Zoom Tech.</span>
          </div>
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
            <li
              className="flex items-center gap-1 cursor-pointer hover:text-blue-600"
              onClick={() => navigate("/services")}>
              <span>Services</span>
              <IoIosArrowDown />
            </li>
            <li
              className="cursor-pointer hover:text-blue-600"
              onClick={() => navigate("/about-us")}>
              About Us
            </li>
            <li
              className="cursor-pointer hover:text-blue-600"
              onClick={() => navigate("/blogs")}>
              Blogs
            </li>
            <li
              className="cursor-pointer hover:text-blue-600"
              onClick={() => navigate("/technologies")}>
              Technologies
            </li>
          </ul>
        </div>

        <button
          className="hidden md:inline-block px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition duration-300"
          onClick={() => navigate("/contact-us")}>
          Contact Us
        </button>

        <button
          onClick={toggleMenu}
          aria-label="Toggle Menu"
          className="md:hidden text-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
          {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>
      </div>

      {isMenuOpen && (
        <ul className="mt-4 space-y-4 text-sm font-medium md:hidden bg-white p-6 rounded-lg shadow-lg">
          <li
            className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition duration-300 ease-in-out"
            onClick={() => navigate("/services")}>
            <span>Services</span>
          </li>
          <li
            className="cursor-pointer hover:text-blue-600 transition duration-300 ease-in-out"
            onClick={() => navigate("/about-us")}>
            About Us
          </li>
          <li
            className="cursor-pointer hover:text-blue-600 transition duration-300 ease-in-out"
            onClick={() => navigate("/blogs")}>
            Blogs
          </li>
          <li
            className="cursor-pointer hover:text-blue-600"
            onClick={() => navigate("/technologies")}>
            Technologies
          </li>
          <li>
            <button
              className="w-full px-5 py-3 border border-black rounded-full bg-white hover:bg-black hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
              onClick={() => navigate("/contact-us")}>
              Contact Us
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
