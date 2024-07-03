// src/ProductList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MensShortList = () => {
  const [MensShorts, setMensShorts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/MensShorts')
      .then(response => {
        console.log('Data fetched:', response.data); // Add this line to debug the response
        setMensShorts(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the products!', error);
      });
  }, []);

  return (
    <div>
      <h1 style={{ backgroundColor: 'white' }}>MensShort List</h1>
      <ul style={{ backgroundColor: 'white' }}>
        {MensShorts.map(MensShort => (
          <li key={MensShort.id}>
            <h2>{MensShort.name}</h2>
            <p>{MensShort.photo_link}</p>
            <p>${MensShort.price}</p>
            <p>{MensShort.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MensShortList;
