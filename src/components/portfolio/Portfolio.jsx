import React from 'react';
import portfolio1 from '../../assets/portfolio1.png';
import './portfolio.css';

const Portfolio = () => (
  <section id="portfolio">
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio__container">
      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={portfolio1} alt="port1" />
        </div>
        <h3>Portfolo Itme tile</h3>
        <div className="portfolio__item-cta">
          <a href="http://github.com" className="btn" target="_blank" rel="noreferrer">Source Code</a>
          <a href="http://facebook.com" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
        </div>
      </article>

      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={portfolio1} alt="port1" />
        </div>
        <h3>Portfolo Itme tile</h3>
        <div className="portfolio__item-cta">
          <a href="http://github.com" className="btn" target="_blank" rel="noreferrer">Source Code</a>
          <a href="http://facebook.com" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
        </div>
      </article>

      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={portfolio1} alt="port1" />
        </div>
        <h3>Portfolo Itme tile</h3>
        <div className="portfolio__item-cta">
          <a href="http://github.com" className="btn" target="_blank" rel="noreferrer">Source Code</a>
          <a href="http://facebook.com" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
        </div>
      </article>

      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={portfolio1} alt="port1" />
        </div>
        <h3>Portfolo Itme tile</h3>
        <div className="portfolio__item-cta">
          <a href="http://github.com" className="btn" target="_blank" rel="noreferrer">Source Code</a>
          <a href="http://facebook.com" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
        </div>
      </article>

      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={portfolio1} alt="port1" />
        </div>
        <h3>Portfolo Itme tile</h3>
        <div className="portfolio__item-cta">
          <a href="http://github.com" className="btn" target="_blank" rel="noreferrer">Source Code</a>
          <a href="http://facebook.com" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
        </div>
      </article>

      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={portfolio1} alt="port1" />
        </div>
        <h3>Portfolo Itme tile</h3>
        <div className="portfolio__item-cta">
          <a href="http://github.com" className="btn" target="_blank" rel="noreferrer">Source Code</a>
          <a href="http://facebook.com" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
        </div>
      </article>
    </div>
  </section>
);

export default Portfolio;
