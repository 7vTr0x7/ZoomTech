import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const FooterShare = () => {
  return (
    <div className="bg-[#F5B22B] p-4 rounded-lg flex items-center justify-between">
      <p className="text-white text-lg font-medium">
        Like what you see? Share with a friend.
      </p>
      <div className="flex gap-4">
        <FaFacebook
          className="text-white text-2xl cursor-pointer hover:scale-110 transition-transform"
          title="Share on Facebook"
        />
        <FaTwitter
          className="text-white text-2xl cursor-pointer hover:scale-110 transition-transform"
          title="Share on Twitter"
        />
        <FaLinkedin
          className="text-white text-2xl cursor-pointer hover:scale-110 transition-transform"
          title="Share on LinkedIn"
        />
      </div>
    </div>
  );
};

export default FooterShare;
