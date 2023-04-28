const axios = require("axios");
const { POKEAPI_BASE_URL } = require("../utils/constants");

const Ability = {};

Ability.getAbilityByName = async (name) => {
  try {
    const response = await axios.get(`${POKEAPI_BASE_URL}/ability/${name}`);
    const ability = response.data;
    console.log(ability);

    return {
      id: ability.id,
      name: ability.name,
      is_main_series: ability.is_main_series,
      effect_entries: ability.effect_entries,
    };
  } catch (error) {
    throw error;
  }
};

//objeto para el controlador
module.exports = Ability;
