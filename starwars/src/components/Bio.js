import React from 'react';
import styled from 'styled-components';

const Bio = props => {

    //styled components
    const NameTag = styled.h2`
        color: black;
    `;
    const BioMarker = styled.p`
        color: black;
    `;
    const CharacterCard = styled.div`
        background-color: #ede9dd;
        flex-direction: row;
    `;
    const { name, birth_year, gender, hair_color, height, ...rest } = props.character.characters;
    return (
        <CharacterCard>
            {console.log("Bio data below this")}
            <NameTag>{name}</NameTag>
            <BioMarker>Year of birth: {birth_year}</BioMarker>
            <BioMarker>Gender: {gender}</BioMarker>
            <BioMarker>Hair color: {hair_color}</BioMarker>
            <BioMarker>Height: {height}</BioMarker>
        </CharacterCard>
    )
}
export default Bio;