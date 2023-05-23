import React from "react";
import { 
    faLinkedin,
    faGithub,
    faMedium,
    faTwitter,
    faAngellist,
 } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
    return (
        <div>
            <nav>
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
            <main>
                <h1>
                    Hey there. I'm Sohaib.
                    <span class="green"> I'm a Full-stack web developer</span>
                </h1>
                <p>
                    With a background in developing efficient web applications in a global market.
                    More thsn 1300+ hours of experience, including mentoring 5+ junior developers to achieve 
                    concrete goals on a strict deadline. Strong skills include JavaScript React, Redux, Ruby, 
                    Ruby on Rails, PostgreSQL, Figma, and Animation Libraries!
                </p>
                <div>
                    <FontAwesomeIcon icon={faGithub} className="text-center" />
                    <FontAwesomeIcon icon={faLinkedin} className="text-center" />
                    <FontAwesomeIcon icon={faMedium} className="text-center" />
                    <FontAwesomeIcon icon={faTwitter} className="text-center" />
                    <FontAwesomeIcon icon={faAngellist} className="text-center" />
                </div>
            </main>

        </div>
    );
    
};

export default Home;
