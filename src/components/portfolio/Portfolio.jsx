import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import portfolio1 from '../../assets/portfolio1.png';
import './portfolio.css';

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: portfolio1,
      title: 'World Vision Clinic',
      description: 'World Vision Clinic is a web application that allows users to see the doctor’s profile and book an appointment with the doctor, and also see the list of all the appointments they have booked.',
      technologies: ['Ruby on Rails', 'React', 'PostgreSQL'],
      source: 'https://github.com/MudasirSherwani/Book-Appointment-Front-End',
      demo: 'https://world-vision-clinic.netlify.app/',
    },
    {
      id: 2,
      image: portfolio1,
      title: 'Portfolio Item 2',
      description: 'Portfolio Item 1 description',
      technologies: ['ror', 'react'],
      source: 'http://github.com',
      demo: 'http://facebook.com',
    },
    {
      id: 3,
      image: portfolio1,
      title: 'Portfolio Item 3',
      description: 'Portfolio Item 1 description',
      technologies: ['ror', 'react'],
      source: 'http://github.com',
      demo: 'http://facebook.com',
    },
    {
      id: 4,
      image: portfolio1,
      title: 'Portfolio Item 4',
      description: 'Portfolio Item 1 description',
      source: 'http://github.com',
      technologies: ['ror', 'react'],
      demo: 'http://facebook.com',
    },
    {
      id: 5,
      image: portfolio1,
      title: 'Portfolio Item 5',
      description: 'Portfolio Item 1 description',
      technologies: ['ror', 'react'],
      source: 'http://github.com',
      demo: 'http://facebook.com',
    },
    {
      id: 6,
      image: portfolio1,
      title: 'Portfolio Item 6',
      description: 'Portfolio Item 1 description',
      technologies: ['ror', 'react'],
      source: 'http://github.com',
      demo: 'http://facebook.com',
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({
            id,
            image,
            title,
            description,
            technologies,
            source,
            demo,
          }) => (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-description">
                <p>{description}</p>
              </div>
              <div className="portfolio__item-technologies">
                {technologies.map((tech) => (
                  <small key={uuidv4()}>{tech}</small>
                ))}
              </div>
              <div className="portfolio__item-cta">
                <a href={source} className="btn" target="_blank" rel="noreferrer">
                  Source Code
                </a>
                <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </div>
            </article>
          ))
        }
      </div>
    </section>
  );
};

export default Portfolio;
