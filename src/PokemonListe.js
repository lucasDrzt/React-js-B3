import React from "react";
import PokemonBox from "./PokemonBox";

const PokemonList = () => {
  const renderPokemonBoxes = () => {
    const pokemonBoxes = [];
    for (let i = 1; i <= 1000; i++) {
      pokemonBoxes.push(<PokemonBox key={i} id={i} />);
    }
    return pokemonBoxes;
  };

  return <div className="pokemon-container">{renderPokemonBoxes()}</div>;
};

export default PokemonList;
