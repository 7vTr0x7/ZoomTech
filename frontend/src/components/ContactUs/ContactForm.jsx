import React from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";

import contactImage from "../../assets/images/contactImage.png";

const ContactForm = () => {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-lg  mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-yellow-600 text-lg font-semibold">Get In Touch</h2>
        <h1 className="text-5xl font-bold mt-2">Let’s Chat, Reach Out to Us</h1>
        <p className="text-gray-600 mt-2 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac ali.
        </p>
        <hr className="bg-black text-black" />
        <form className="mt-6">
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Chris Evans"
              className="w-full mt-2 p-3 border rounded-lg bg-[#F9F9F9]"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Chris Evans"
              className="w-full mt-2 p-3 border rounded-lg bg-[#F9F9F9]"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Message</label>
            <textarea
              placeholder="Leave us a message"
              className="w-full mt-2 p-3 border rounded-lg bg-[#F9F9F9] h-44"></textarea>
          </div>
          <div className="flex justify-between items-center mt-6">
            <p className="text-gray-600 ml-4">
              Our sales representative will contact you soon.
            </p>
            <button
              type="submit"
              className=" bg-[#F5B22B] text-white px-3 py-2 rounded-3xl font-semibold hover:bg-yellow-600">
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="flex flex-col items-center justify-center">
        <img
          src={contactImage}
          alt="Random"
          className="rounded-lg  w-full max-w-[400px] max-h-[500px]"
        />
        <div className="flex flex-col items-start justify-center mt-6 space-y-4 bg-[#F9F9F9] px-6 py-3 w-full max-w-[400px]">
          <div className="w-full">
            <div className="flex items-center bg-white p-3 rounded-2xl w-full">
              <FaEnvelope className="text-yellow-500 text-3xl mr-3 bg-yellow-100 rounded-full p-2" />
              <div>
                <h3 className="text-sm font-semibold text-gray-700">Email</h3>
                <span className="text-gray-700">zoom@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="flex items-center bg-white p-3 rounded-2xl w-full">
              <FaPhone className="text-yellow-500 text-3xl mr-3 bg-yellow-100 rounded-full p-2" />
              <div>
                <h3 className="text-sm font-semibold text-gray-700">
                  Contact Number
                </h3>
                <span className="text-gray-700">92943 43434</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
