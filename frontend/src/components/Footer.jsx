import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

import { IoLocationSharp } from "react-icons/io5";

import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="flex items-center gap-1 mb-3">
            <img alt="Zoom Tech Logo" src={logo} className="h-8 w-8" />
            <span className="font-bold text-2xl">Zoom Tech</span>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            We offer a comprehensive suite of digital marketing services that
            cover all aspects of your online presence. From SEO and social media
            marketing to content creation and PPC advertising, we have the
            expertise to handle all your marketing needs.
          </p>
          <div className="flex space-x-4 mt-6">
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200">
              <FaFacebookF className="text-gray-700" />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200">
              <FaTwitter className="text-gray-700" />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200">
              <FaLinkedinIn className="text-gray-700" />
            </a>
            <a
              href="#"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200">
              <FaInstagram className="text-gray-700" />
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Navigation</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <a href="#" className="hover:text-gray-900">
                  Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Agency
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Case Study
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Resource
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">License</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>
                <a href="#" className="hover:text-gray-900">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Copyright
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900">
                  Email Address
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-4 text-gray-600 text-sm">
              <li className="flex items-center">
                <FaPhone className="mr-2 text-gray-900 text-lg" />
                <span>(406) 555-0120</span>
              </li>
              <li className="flex items-center">
                <MdEmail className="mr-2 text-gray-900 text-xl" />
                <span>Hey@boostlm.com</span>
              </li>
              <li className="flex items-start">
                <IoLocationSharp className="mr-2 text-gray-900 text-2xl" />
                <span>
                  2972 Westheimer Rd. Santa Ana, <br /> Illinois 85486
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
