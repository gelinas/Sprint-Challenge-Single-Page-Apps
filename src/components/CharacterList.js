import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Container, Row, Col } from 'reactstrap';

import CharacterCard from './CharacterCard'
import SearchForm from "./SearchForm";


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState();
  const [displayedCharacters, setDisplayedCharacters] = useState();
  const [currentPage, setCurrentPage] = useState(`https://rickandmortyapi.com/api/character/`)

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
        .get(currentPage)
        .then(response => {
          setCharacters(response.data.results);
          setDisplayedCharacters(response.data.results);
        })
        .catch(error => {
          console.error(error);
        });
  },[currentPage]);

  if (!displayedCharacters) {
    return <div>Loading character information...</div>;
  }

  return (
    <section className="character-list">
    <Container>
      <Row>
      <Col xs="12" className="search-form d-flex justify-content-center mt-3">
      <h2>The Characters of Rick and Morty</h2>
      </Col>
      </Row>
      <SearchForm 
        characters={characters} 
        displayedCharacters={displayedCharacters}
        setDisplayedCharacters={setDisplayedCharacters} />

      <Row>
        {displayedCharacters.map((character, index) => {
          // console.log(character);
          return (
              <CharacterCard
                key={character.id}
                name={character.name}
                image={character.image}
                species={character.species}
                episode={character.episode}
              />
          );
          })}
      </Row>
    </Container>
    </section>
  );
}
