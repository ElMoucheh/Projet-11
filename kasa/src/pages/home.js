import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../assets/home.scss";

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
      <div className='banner'>
        <h2>Chez vous, partout et ailleurs</h2>
      </div>
      <div className='container'>
        {data.map((item) => (
          <Link to={`/fiche-logement/${item.id}`} className='card-link' key={item.id}>
            <div className='card'>
              <div className='card-image'>
                <img src={item.cover} alt={item.title} />
              </div>
              <p>{item.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
