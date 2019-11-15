import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const CharStyles = styled.section`
  background: aqua;
  text-align: center;
  padding: 30px;
  border-radius: 20px;
`;
const NameStyles = styled.h3`
  font-size: 1.4rem;
`;
const DataStyles = styled.h4`
  font-size: 1rem;
`;
export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
    const [charData, setCharData] = useState([]);
    const [query] = useState('');

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    axios
      .get(`https://rickandmortyapi.com/api/character/`)
      .then(response => {
        setCharData(response.data.results);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [query]);


  return (
    <CharStyles>
      <section className="character-list">
        {charData.map(data => {
          return (
            <div className="char-data" key={data.id}>
              <NameStyles>Name: {data.name}</NameStyles>
                <DataStyles>
                <p>Species: {data.species}</p>
                <p>Status: {data.status}</p>
                </DataStyles>
              </div>
        )
      })}
    </section>
    </CharStyles>
  );
}
