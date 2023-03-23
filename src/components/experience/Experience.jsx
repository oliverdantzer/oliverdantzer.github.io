import React from "react";
import "./experience.css";
import { TbBrandMongodb } from "react-icons/tb";
import { TbBrandPython } from "react-icons/tb";
import { TbBrandHtml5 } from "react-icons/tb";
import { TbBrandCss3 } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";
import { IoLogoNodejs } from "react-icons/io";
import { TbBrandReact } from "react-icons/tb";
import { TbBrandMysql } from "react-icons/tb";
import { TbBrandCpp } from "react-icons/tb";
import { DiJava } from "react-icons/di";

const Experience = () => {
  return (
    <section id="experience">
      <h2>My Technical Skills</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <TbBrandHtml5 className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <TbBrandCss3 className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <TbBrandJavascript className="experience__details-icon" />
              <div>
                <h4>Javascript</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <TbBrandReact className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small>Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend">
          <h3>Backend development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <TbBrandPython className="experience__details-icon" />
              <div>
                <h4>Python</h4>
                <small>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <DiJava className="experience__details-icon" />
              <div>
                <h4>Java</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <TbBrandCpp className="experience__details-icon" />
              <div>
                <h4>C++</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <IoLogoNodejs className="experience__details-icon" />
              <div>
                <h4>Node JS</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <TbBrandMysql className="experience__details-icon" />
              <div>
                <h4>MySQL</h4>
                <small>Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <TbBrandMongodb className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small>Basic</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
