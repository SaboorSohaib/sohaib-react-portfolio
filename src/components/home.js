import React from "react";
import { 
    faLinkedin,
    faGithub,
    faMedium,
    faTwitter,
    faAngellist,
 } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './style.css';

const Home = () => {
    return (
        <main className="main-home">
            <nav className="navbar">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/projects">Projects</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </nav>
            <div className="content">
                <h1>
                    Hey there. I'm Abdul Saboor Sohaib.<br />
                    <span class="green"> I'm a Full-stack web developer</span>
                </h1>
                <p className="text">
                    With a background in developing efficient web applications in a global market.
                    More thsn 1300+ hours of experience, including mentoring 5+ junior developers to achieve 
                    concrete goals on a strict deadline. Strong skills include JavaScript React, Redux, Ruby, 
                    Ruby on Rails, PostgreSQL, Figma, and Animation Libraries!
                </p>
                <div className="social-icon">
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/sohaib-ahmed-1b1b1b1b1/">
                                <FontAwesomeIcon icon={faGithub} className="text-center" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/sohaib-ahmed-1b1b1b1b1/">
                                <FontAwesomeIcon icon={faLinkedin} className="text-center" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/sohaib-ahmed-1b1b1b1b1/">
                                <FontAwesomeIcon icon={faAngellist} className="text-center" />
                            </a>
                        </li>
                        <li>
                            <a href="https://medium.com/@sohaibahmedkhan">
                                <FontAwesomeIcon icon={faMedium} className="text-center" />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/SohaibAhmedKha1">
                                <FontAwesomeIcon icon={faTwitter} className="text-center" />
                            </a>
                        </li>
                        
                    </ul>
                </div>
            </div>

        </main>
    );
    
};

export default Home;
