import React from "react";
import { 
    faLinkedin,
    faGithub,
    faMedium,
    faTwitter,
    faAngellist,
 } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './style.css'

const Form = () => {
    return (
        <main className="main-form">
            <div className="form-content"> 
                <p>
                  I'm always interested in hearing about new projects, so if you'd like to chat please get in touch.
                </p>
                <form className="form">
                    <input type="text" id="name" className="input" name="name" placeholder="Your name.." />
                    <input type="text" id="email" className="input" name="email" placeholder="Your email.." />
                    <textarea id="subject" name="subject" className="input" placeholder="Write something.." ></textarea>
                    <button type="submit" className="form-btn">Get in touch</button>
                </form>
            </div>
            <div className="last-social-icon">
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
        </main>
    );
};

export default Form;
