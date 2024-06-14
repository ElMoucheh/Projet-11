import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Accomodation = () => {

  const { id } = useParams(); 
  const navigate = useNavigate(); 
  const [logement, setLogement] = useState(null); 

  useEffect(() => {
    fetch('/data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        const logementData = data.find(item => item.id === id);
        if (!logementData) {
          navigate('/404');
        } else {
          setLogement(logementData);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        navigate('/404');
      });
  }, [id, navigate]);

  if (!logement) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page!</p>
    </div>
  );
};

export default Accomodation;
