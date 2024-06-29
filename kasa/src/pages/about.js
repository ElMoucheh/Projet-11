import React from 'react';
import Banner from '../components/banner';
import Collapse from '../components/collapse';
import "../assets/pages/about.scss";

const About = () => {
  const data = {
    items: [
      {
        title: "Fiabilité",
        description: "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
      },
      {
        title: "Respect",
        description: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
      },
      {
        title: "Service",
        description: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
      },
      {
        title: "Sécurité",
        description: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
      }
    ]
  };

  return (
    <div className='about'>
      <Banner 
        backgroundImage="banner_about.jpg" 
      />
      <div className='container'>
        {data.items.map((item, index) => (
          <Collapse 
            key={index}
            title={item.title}
            content={item.description}
            isList={false}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
