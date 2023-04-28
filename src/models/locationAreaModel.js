const axios = require("axios");
const { POKEAPI_BASE_URL } = require("../utils/constants");

const LocationArea = {};

LocationArea.getLocationAreaByName = async (name) => {
  try {
    const response = await axios.get(
      `${POKEAPI_BASE_URL}/location-area/${name}`
    );
    const locationArea = response.data;
    return {
      id: locationArea.id,
      name: locationArea.name,
      location: locationArea.location.name,
    };
  } catch (error) {
    throw error;
  }
};

//objeto para el controlador
module.exports = LocationArea;
