import React from 'react';
import '../assets/components/banner.scss';

const Banner = ({ title, backgroundImage }) => {
    return (
      <div 
        className='banner' 
        style={{ backgroundImage: `url(${require(`../assets/img/${backgroundImage}`)})` }}>
        {title && <h2>{title}</h2>}
      </div>
    );
  };

export default Banner;