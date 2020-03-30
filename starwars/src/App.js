import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';
// import { Button } from 'reactstrap';

import Card from './components/Card.js';

// const useGetCharacters = (nextStar) => {
//   const [starCharacter, setStarCharacter] = useState([]);
//   console.log("starData hook below")
//   console.log(nextStar);
//   useEffect(() => {
//     axios
//       .get(nextStar)
//       .then(response => {
//         setStarCharacter(response.data.results);
//       })
//       .catch(error => {
//         console.log("Error " + error);
//       })
//   }, [])
//   return starCharacter;
// }

const App = () => {

  const [starData, setStarData] = useState([]);

  useEffect(() => {
    console.log('Getting data...');
    axios
      .get('https://swapi.co/api/people/')
      .then(response => {
        console.log(response);
        setStarData(response.data.results);
      })
      .catch(error => {
        console.log('Error' + error);
      })
  }, [])

  // styled components
  const CardWrapper = styled.div`
    display: flex;
  `;
  // const ButtonWrapper = styled.div`
  //   margin: 3%;
  // `;

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {/* {console.log(starData)} */}
      <CardWrapper>{starData.map((item, index) => <Card characters={item} key={index} />)}</CardWrapper>
      {/* <ButtonWrapper><Button onClick={useGetCharacters(starData.data.next)}>Next Character</Button></ButtonWrapper> */}
    </div>
  );
}

export default App;
