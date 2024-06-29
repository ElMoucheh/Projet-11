import React, { useEffect, useState } from 'react';
import Banner from '../components/banner';
import CardLink from '../components/card_accomodation';
import "../assets/pages/home.scss";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className='home'>
     <Banner 
        title="Chez vous, partout et ailleurs" 
        backgroundImage="banner_home.jpg" 
      />
      <div className='container'>
        {data.map((item) => (
          <CardLink item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
