import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import LocationsList from "./components/LocationsList";


export default function App() {
  return (
    <main>
      <Header />
        <CharacterList />
        <LocationsList />
    </main>
  );
}
