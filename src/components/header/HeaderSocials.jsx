import React from 'react';
import { BsLinkedin, BsGithub, BsMedium } from 'react-icons/bs';
import './header.css';

const HeaderSocials = () => (
  <div className="header__socials">
    <a href="https://www.linkedin.com/in/abdul-saboor-sohaib/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
    <a href="https://github.com/SaboorSohaib" target="_blank" rel="noreferrer"><BsGithub /></a>
    <a href="https://medium.com/@abdulsaboorsohaib" target="_blank" rel="noreferrer"><BsMedium /></a>
  </div>
);

export default HeaderSocials;
