import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => (
  <header>
    <div className="container header__container">
      <h5>Hello, I &apos;m</h5>
      <h1>Abdul Saboor Sohaib</h1>
      <h5 className="text-light">Full-stack Web Developer</h5>
      <CTA />

      <a href="#contact" className="scroll__down">Scroll Down</a>

      <HeaderSocials />
    </div>
  </header>
);

export default Header;
