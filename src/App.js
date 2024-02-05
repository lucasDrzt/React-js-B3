import "./App.css";
import Navbar from "./Navbar";
import PokemonList from "./PokemonListe";
import React, { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <div>
        <PokemonList searchTerm={searchTerm} />
      </div>
    </div>
  );
}

export default App;
