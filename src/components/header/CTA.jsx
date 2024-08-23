import React from 'react';
import AbdulSaboorFullStackResume from '../../assets/AbdulSaboorFullStackResume.pdf';

const CTA = () => (
  <div className='cta'>
    <a href={AbdulSaboorFullStackResume} download className='btn'>
      Download CV
    </a>
    <a href='#contact' className='btn btn-primary'>
      Let&apos;s Talk
    </a>
  </div>
);

export default CTA;
