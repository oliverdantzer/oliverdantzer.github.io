import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeadersSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/oliverdantzer/"
        rel="noreferrer"
        target="_blank"
      >
        <BsLinkedin />
      </a>
      <a
        href="http://github.com/oliverdantzer"
        rel="noreferrer"
        target="_blank"
      >
        <FaGithub />
      </a>
    </div>
  );
};

export default HeadersSocials;
