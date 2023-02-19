import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full bg-bodyColor">
      <p className="text-sm text-gray-400 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nobis
        tenetur, perspiciatis, fugiat magnam dignissimos architecto in
        cupiditate rem soluta voluptas ipsum nesciunt harum veniam eveniet. Aut
        consectetur necessitatibus porro?
      </p>
<div className="flex justify-center gap-4 mt-3">
    <span className="footerIcon">
        <FaGithub/>
    </span>
    <span className="footerIcon">
        <FaLinkedin/>
    </span>
    <span className="footerIcon">
        <FaTwitter/>
    </span>
    <span className="footerIcon">
        <FaWhatsapp/>
    </span>
</div>
    </div>
  );
}

export default Footer;
