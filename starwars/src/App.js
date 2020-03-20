import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
// import styled from 'styled-components';

import Card from './components/Card.js';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [starData, setStarData] = useState([]);

  useEffect(() => {
    console.log('Getting data...');
    axios
      .get('https://swapi.co/api/people/')
      .then(response => {
        // console.log(response);
        setStarData(response.data.results);
      })
      .catch(error => {
        console.log('Error' + error);
      })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {console.log(starData)}
      {starData.map((item, index) => <Card characters={item} key={index}/>)}
    </div>
  );
}

export default App;
