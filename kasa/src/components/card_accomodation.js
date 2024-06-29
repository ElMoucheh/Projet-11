import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/components/card_accomodation.scss';

const CardLink = ({ item }) => {
  return (
    <Link to={`/fiche-logement/${item.id}`} className='card-link' key={item.id}>
      <div className='card'>
        <div className='card-image'>
          <img src={item.cover} alt={item.title} />
        </div>
        <p>{item.title}</p>
      </div>
    </Link>
  );
};

export default CardLink;
