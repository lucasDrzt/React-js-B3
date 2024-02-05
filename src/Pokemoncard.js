
const Pokemon = async () => {
  for (let i = 1; i <= 1000; i++) {
    try {
      let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      if (response.ok) {
        const pokemonData = await response.json();
        console.log(pokemonData);
      } else {
        console.error(`Error fetching Pokemon ${i}: ${response.status}`);
      }
    } catch (error) {
      console.error(`Error fetching Pokemon ${i}: ${error.message}`);
    }
  }
};

export default Pokemon;
