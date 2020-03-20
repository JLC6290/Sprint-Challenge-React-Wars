import React from 'react';
import Bio from './Bio.js';
import styled from 'styled-components';

const Card = props => {
    
    //styled components
    const CardDiv = styled.div`
        display: flex;
        width: 8%;
        margin: 1%;
        flex-direction: column; 
    `;
    return (
        <CardDiv>
            {/* {console.log("Card data below this")}
            {console.log(props)} */}
            <Bio character={props}/>
        </CardDiv>
    )
}
export default Card;