import React from 'react';
import CTA from './CTA';
import sohaib from '../../assets/sohaib.jpeg';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => (
  <header>
    <div className="container header__container">
      <h5>Hello, I'm</h5>
      <h1>Abdul Saboor Sohaib</h1>
      <h5 className="text-light">Full-stack Web Developer</h5>
      <CTA />
      <HeaderSocials />

      <div className="me">
        <img src={sohaib} alt="Sohaib" />
      </div>

      <a href="#contact" className="scroll__down">Scroll Down</a>
    </div>
  </header>
);

export default Header;
