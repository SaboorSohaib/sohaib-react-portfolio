import React from 'react';
import { BsAward } from 'react-icons/bs';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import sohaib from '../../assets/sohaib.jpeg';
import './about.css';

const About = () => (
  <section id="about">
    <h5>Get To Know</h5>
    <h2>About Me</h2>
    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={sohaib} alt="My pic" />
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <BsAward className="about__icon" />
            <h5>Experience</h5>
            <small>1 year</small>
          </article>

          <article className="about__card">
            <AiOutlineFundProjectionScreen className="about__icon" />
            <h5>Projects</h5>
            <small>30+</small>
          </article>
        </div>
        
        <p>
          Full-stack web developer with a background in developing efficient web applications in a
          global market. More thsn 1300+ hours of experience, including mentoring 5+ junior developers
          to achieve concrete goals on a strict deadline. Strong skills include JavaScript React, Redux,
          Ruby, Ruby on Rails, PostgreSQL, RestAPI and Figma!
        </p>

        <a href="#contact" className="btn btn-primary">Let&apos;s Talk</a>
      </div>
    </div>
  </section>
);

export default About;
