const axios = require("axios");
const { POKEAPI_BASE_URL } = require("../utils/constants");

const Pokemon = {};

Pokemon.getPokemonByName = async (name) => {
  try {
    const response = await axios.get(`${POKEAPI_BASE_URL}/pokemon/${name}`);
    const pokemon = response.data;

    return {
      name: pokemon.name,
      id: pokemon.id,
      height: pokemon.height,
      weight: pokemon.weight,
      types: pokemon.types.map((type) => type.type.name),
      forms: pokemon.forms.map((form) => ({
        name: form.name,
        url: form.url,
      })),
      location_area_encounters: pokemon.location_area_encounters,
      species: {
        name: pokemon.species.name,
        url: pokemon.species.url,
      },
    };
  } catch (error) {
    throw error;
  }
};

//objeto para el controlador
module.exports = Pokemon;
