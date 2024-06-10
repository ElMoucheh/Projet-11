import React from 'react';

import "../../assets/about.scss";

import { ReactComponent as Logo } from '../../assets/img/white/arrow-up.svg';

const About = () => {
  return (
    <div className='about'>
      <div className='banner'></div>
      <div className='container'>
        <div className='list'>
          <p>Fiabilité</p>
          <Logo />
        </div>
        <div className='list'>
          <p>Respect</p>
          <Logo />
        </div>
        <div className='list'>
          <p>Service</p>
          <Logo />
        </div>
        <div className='list'>
          <p>Sécurité</p>
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default About;
