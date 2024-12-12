import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { IoIosArrowDown } from "react-icons/io";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white shadow-lg rounded-b-lg md:mx-20 md:px-16 px-6 py-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-14">
          <div className="flex items-center gap-1 ">
            <img alt="Zoom Tech Logo" src={logo} className="h-6 w-6" />
            <span className="font-semibold text-lg">Zoom Tech.</span>
          </div>
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
            <li className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
              <span>Services</span>
              <IoIosArrowDown />
            </li>
            <li className="cursor-pointer hover:text-blue-600">About Us</li>
            <li className="cursor-pointer hover:text-blue-600">Blogs</li>
          </ul>
        </div>

        <button className="hidden md:inline-block px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition duration-300">
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
        <ul className="mt-4 space-y-2 text-sm font-medium md:hidden">
          <li className="flex items-center gap-1 cursor-pointer hover:text-blue-600">
            <span>Services</span>
          </li>
          <li className="cursor-pointer hover:text-blue-600">About Us</li>
          <li className="cursor-pointer hover:text-blue-600">Blogs</li>
          <li>
            <button className="w-full px-4 py-2 border border-black rounded-full hover:bg-black hover:text-white transition duration-300">
              Contact Us
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
