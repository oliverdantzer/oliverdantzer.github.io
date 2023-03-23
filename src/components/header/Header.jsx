import React from "react";
import "./header.css";
import CallToAction from "./CallToAction";
import HeadersSocials from "./HeaderSocials";
import { IoIosCode } from "react-icons/io";
import { IoIosSchool } from "react-icons/io";

function Header() {
  return (
    <header id="home">
      <div className="container header__container">
        <h2>Hello, my name is</h2>
        <h1>Oliver Dantzer</h1>
        <h2 className="secondary-text">
          <IoIosSchool /> Computer science student at Queen's University
        </h2>
        <h2 className="secondary-text">
          <IoIosCode /> Full-stack developer
        </h2>
        <CallToAction />
        <HeadersSocials />
      </div>
    </header>
  );
}

export default Header;
