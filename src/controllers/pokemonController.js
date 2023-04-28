const Pokemon = require("../models/pokemonModel");

module.exports = {
  //petición asíncrona para recuper la info del Pokemon
  async getPokemon(req, res) {
    try {
      const pokemonName = req.params.name;
      const pokemon = await Pokemon.getPokemonByName(pokemonName);
      res.status(200).json(pokemon);
    } catch (error) {
      res.status(500).json({ message: "Error al obtener la info del Pokemon" });
    }
  },
};
