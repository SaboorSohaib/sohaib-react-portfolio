import React from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';
import './experience.css';

const Experience = () => (
  <section id="experience">
    <h5>What Skills I have</h5>
    <h2>My Experience</h2>
    <div className="container experience__container">
      <div className="container__frontend">
        <h3>Frontend</h3>
        <div className="experience__content">
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <h4>HTML</h4>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <h4>CSS</h4>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <h4>JavaScript</h4>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <h4>React</h4>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <h4>Redux</h4>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <h4>Bootstrap</h4>
          </article>
        </div>
      </div>

      <div className="container__backend">
        <h3>Backend</h3>
        <div className="experience__content">
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <h4>Ruby</h4>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <h4>Ruby on Rails</h4>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <h4>PostgreSQL</h4>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <h4>Rspec</h4>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <h4>RestAPI</h4>
          </article>
          <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <h4>Swagger</h4>
          </article>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
