import React, { useState } from 'react';
import {
  AiOutlineHome, AiOutlineUser, AiOutlineFileText, AiOutlineProject, AiOutlineMail,
} from 'react-icons/ai';
import './nav.css';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''} aria-label="Home" role="button"><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''} aria-label="About" role="button"><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''} aria-label="Experience" role="button"><AiOutlineFileText /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''} aria-label="Portfolio" role="button"><AiOutlineProject /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''} aria-label="Contact" role="button"><AiOutlineMail /></a>
    </nav>
  );
};

export default Nav;
