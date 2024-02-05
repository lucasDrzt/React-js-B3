// PokemonBox.js
import React, { useState, useEffect } from 'react';
import './App.css'; 

const PokemonBox = ({ id }) => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        if (response.ok) {
          const data = await response.json();
          setPokemonData(data);
        } else {
          console.error(`Error fetching Pokemon ${id}: ${response.status}`);
        }
      } catch (error) {
        console.error(`Error fetching Pokemon ${id}: ${error.message}`);
      }
    };

    fetchPokemonData();
  }, [id]);

  return (
    <div className="pokemon-container box">
      {pokemonData && (
        <>
          <img className="mouvBox" src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          <p >Nom: {pokemonData.name}</p>
          <p>Type: {pokemonData.types[0].type.name}</p>
        </>
      )}
    </div>
  );
};

export default PokemonBox;
