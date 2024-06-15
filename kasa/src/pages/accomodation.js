import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/img/white/arrow-up.svg';
import Carousel from '../components/caroussel';

import "../assets/accomodation.scss";
import starFull from '../assets/img/color/star_full.svg';
import starEmpty from '../assets/img/color/star_empty.svg';

const Accomodation = () => {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const [logement, setLogement] = useState(null); 
  const [descriptionOpen, setDescriptionOpen] = useState(false);
  const [equipmentsOpen, setEquipmentsOpen] = useState(false);

  useEffect(() => {
    fetch('/data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Connexion OK');
        }
        return response.json();
      })
      .then(data => {
        const logementData = data.find(item => item.id === id);
        if (!logementData) {
          navigate('/404');
        } else {
          setLogement(logementData);
          console.log(logementData);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        navigate('/404');
      });
  }, [id, navigate]);

  if (!logement) {
    return <div className='loading'>
            <p>Chargement</p>
          </div>;
  }

  const ratingStars = (rating) => {
    const totalStars = 5;
    const fullStars = parseInt(rating);
    const emptyStars = totalStars - fullStars;

    return (
      <>
        {Array.from({ length: fullStars }, (_, i) => (
          <img src={starFull} alt="Full Star" key={`full-${i}`} />
        ))}
        {Array.from({ length: emptyStars }, (_, i) => (
          <img src={starEmpty} alt="Empty Star" key={`empty-${i}`} />
        ))}
      </>
    );
  };

  return (
    <div className='accomodation'>
      <div className='banner'>
        <Carousel logement={logement} />
      </div>
      <div className='container'>
        <div className='container_head'>
          <div className='container_title'>
            <h2>{logement.title}</h2>
            <p>{logement.location}</p>
          </div>
          <div className='list_tags'>
            {logement.tags.map((tag, index) => (
              <div className='tags' key={index}>
                <p>{tag}</p>
              </div>
            ))}
          </div>
        </div>
        <div className='container_host'>
          <div className='profil'>
            <p>{logement.host.name}</p>
            <div className='bubble'>
              <img src={logement.host.picture} alt={logement.host.name} />
            </div>
          </div>
          <div className='container_rate'>
            {ratingStars(logement.rating)}
          </div>
        </div>
      </div>
      <div className='container_details'>
        <div className='container_list'>
          <div 
            className={`list_header ${descriptionOpen ? 'active' : ''}`}
            onClick={() => setDescriptionOpen(!descriptionOpen)}>
            <p>Description</p>
            <Logo />
          </div>
          {descriptionOpen && (
            <div className='container_description open'>
              <p>{logement.description}</p>
            </div>
          )}
        </div>
        <div className='container_list'>
          <div className={`list_header ${equipmentsOpen ? 'active' : ''}`} onClick={() => setEquipmentsOpen(!equipmentsOpen)}>
            <p>Équipements</p>
            <Logo />
          </div>
          {equipmentsOpen && (
            <div className='container_description open'>
              <ul>
                {logement.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Accomodation;
