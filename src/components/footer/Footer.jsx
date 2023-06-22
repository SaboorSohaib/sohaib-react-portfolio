import React from 'react';
import { BsLinkedin, BsGithub, BsMedium } from 'react-icons/bs';
import './footer.css';

const Footer = () => (
  <footer id="footer">
    <a href="#" className="footer__logo">Abdul Saboor Sohaib</a>

    <ul className="permalinks">
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>

    <div className="footer__socials">
      <a href="https://www.linkedin.com/in/abdul-saboor-sohaib/" target="_blank" rel="noreferrer" aria-label="Linkedin"><BsLinkedin /></a>
      <a href="https://github.com/SaboorSohaib" target="_blank" rel="noreferrer" aria-label="GitHub"><BsGithub /></a>
      <a href="https://medium.com/@abdulsaboorsohaib" target="_blank" rel="noreferrer" aria-label="Medium"><BsMedium /></a>
    </div>

    <div className="footer__copyright">
      <small>&copy; 2023 Abdul Saboor Sohaib. All rights reserved.</small>
    </div>
  </footer>
);

export default Footer;
