import React from "react";
import "./portfolio.css";
import { SiGithub } from "react-icons/si";
import Brainy from "../../assets/Project_1.png";
import Card from "../../assets/card.png";
import Kfold from "../../assets/kfold.png";
import Decomp from "../../assets/decomp-3.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Brainy} alt="" />
          </div>
          <h3>Brainy Blobs</h3>
          <a
            href="https://github.com/ATNoName/Brainy_Blobs"
            className="btn"
            rel="noreferrer"
            target="_blank"
          >
            <SiGithub /> View Github
          </a>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Decomp} alt="" />
          </div>
          <h3>Convex Polygon Decomp</h3>
          <a
            href="https://github.com/oliverdantzer/simple-convex-decomposition"
            className="btn"
            rel="noreferrer"
            target="_blank"
          >
            <SiGithub /> View Github
          </a>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Kfold} alt="" />
          </div>
          <h3>Linear regression and k-fold cross-validation</h3>
          <a
            href="https://github.com/oliverdantzer/linear-regression-and-k-fold-cross-validation"
            className="btn"
            rel="noreferrer"
            target="_blank"
          >
            <SiGithub /> View Github
          </a>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={Card} alt="" />
          </div>
          <h3>Yaniv predicate logic model exploration</h3>
          <a
            href="https://github.com/oliverdantzer/CISC204_project"
            className="btn"
            rel="noreferrer"
            target="_blank"
          >
            <SiGithub /> View Github
          </a>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
