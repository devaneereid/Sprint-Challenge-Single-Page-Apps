import React, { useEffect, useState } from "react";
import axios from "axios";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
    const [charData, setCharData] = useState([]);
    const [query, setQuery] = useState('');

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

  const handleInputChange = e => {
    setQuery(e.target.value);
  };

  return (
    <section className="character-list">
      
      {charData.map(data => {
        return (
          <div className="char-data" key={data.id}>
            <h3>Name: {data.name}</h3>
              <p>Species: {data.species}</p>
              <p>Status: {data.status}</p>
            </div>
        )
      })}
    </section>
  );
}
