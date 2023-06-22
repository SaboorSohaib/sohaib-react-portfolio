import React from 'react';
import Sohaib from '../../assets/Sohaib.pdf';

const CTA = () => (
  <div className="cta">
    <a href={Sohaib} download className="btn">Download CV</a>
    <a href="#contact" className="btn btn-primary">Let&apos;s Talk</a>
  </div>
);

export default CTA;
