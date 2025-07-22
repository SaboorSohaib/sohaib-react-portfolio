import { v4 as uuidv4 } from "uuid";
import portfolio1 from "../../assets/portfolio1.png";
import Hospital from "../../assets/Hospital.png";
import Medsta from "../../assets/Medsta.png";
import countries from "../../assets/countries.png";
import SpaceTraverlers from "../../assets/SpaceTraverlers.png";
import awesome from "../../assets/awesome.png";
import "./portfolio.css";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: portfolio1,
      title: "World Vision Clinic",
      description:
        "World Vision Clinic is a professional web application that provides users with doctor profiles and a user-friendly appointment booking system, streamlining the process of selecting and scheduling appointments.",
      technologies: ["Ruby on Rails", "React", "PostgreSQL"],
      source: "https://github.com/MudasirSherwani/Book-Appointment-Front-End",
      demo: "https://world-vision-clinic.netlify.app/",
    },
    {
      id: 2,
      image: Medsta,
      title: "Medsta",
      description:
        "Medsta is a modern e-commerce application that allows users to browse, search, and purchase products online. It features a seamless shopping experience, product management, and secure checkout, making online shopping easy and efficient.",
      technologies: ["Nest.js", "Next.js", "PostgreSQL", "Tailwind CSS"],
      source: "https://github.com/SaboorSohaib/medsta-frontend",
      demo: "https://medsta-frontend.vercel.app/",
    },
    {
      id: 3,
      image: Hospital,
      title: "Hospital Management System",
      description:
        "Hospital Management System is a sophisticated React app for seamless patient and doctor management, seamlessly integrating with an API. Users can efficiently add and remove patients with ease, ensuring a smooth experience for hospital staff.",
      technologies: ["Next.js", "MongoDB", "Tailwind CSS"],
      source: "https://github.com/SaboorSohaib/hospital-website",
      demo: "https://hospital-website-rho-peach.vercel.app/",
    },
    {
      id: 4,
      image: countries,
      title: "Europe Countries",
      description:
        "Europe Countries is a React application that allows users to see the list of all the countries in Europe and also see the details of each country. I fetched the countries from API.",
      technologies: ["React", "Redux", "CSS"],
      source: "https://github.com/SaboorSohaib/Europe-countries",
      demo: "https://europe-countries-map.netlify.app/",
    },
    {
      id: 5,
      image: SpaceTraverlers,
      title: "Space Travelers Hub",
      description:
        "Space Travelers Hub is a cutting-edge React application that empowers users to effortlessly book and cancel rocket reservations. Leveraging API integration.",
      technologies: ["React", "Redux", "Bootstrap"],
      source: "https://github.com/SaboorSohaib/Space-Travelers-Hub",
      demo: "https://sohaib-space-travel-hub.netlify.app/",
    },
    {
      id: 6,
      image: awesome,
      title: "Awesome Books",
      description:
        "Awesome Books is a professional JavaScript application that enables users to efficiently add and remove books from a list, providing a seamless experience for book management.",
      technologies: ["JavaScript", "HTML", "CSS"],
      source: "  https://github.com/SaboorSohaib/Awesome-books",
      demo: "https://saboorsohaib.github.io/Awesome-books/",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(
          ({ id, image, title, description, technologies, source, demo }) => (
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
                <a
                  href={source}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Source Code
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          )
        )}
      </div>
    </section>
  );
};

export default Portfolio;
