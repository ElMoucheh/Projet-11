import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Carousel from '../components/caroussel';
import RatingStars from '../components/rating_stars';
import ContainerList from '../components/collapse';
import Tags from '../components/tags';
import "../assets/pages/accomodation.scss";

const Accomodation = () => {
  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const [logement, setLogement] = useState(null); 

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

  return (
    <div className='accomodation'>
      <div className='wrapper_caroussel'>
        <Carousel logement={logement} />
      </div>
      <div className='container'>
        <div className='container_head'>
          <div className='container_title'>
            <h2>{logement.title}</h2>
            <p>{logement.location}</p>
          </div>
          <Tags tags={logement.tags} />
        </div>
        <div className='container_host'>
          <div className='profil'>
            <p>{logement.host.name}</p>
            <div className='bubble'>
              <img src={logement.host.picture} alt={logement.host.name} />
            </div>
          </div>
          <div className='container_rate'>
            <RatingStars rating={logement.rating} />
          </div>
        </div>
      </div>
      <div className='container_details'>
        <ContainerList 
          title="Description" 
          content={logement.description} 
          isList={false}
        />
        <ContainerList 
          title="Équipements" 
          content={logement.equipments} 
          isList={true}
        />
      </div>
    </div>
  );
};

export default Accomodation;