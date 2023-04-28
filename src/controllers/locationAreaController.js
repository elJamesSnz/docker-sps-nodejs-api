const locationAreaModel = require("../models/locationAreaModel");

module.exports = {
  //petición asíncrona para recuper la info de locationArea
  async getLocationArea(req, res) {
    try {
      const locationAreaName = req.params.name;
      const locationArea = await locationAreaModel.getLocationAreaByName(
        locationAreaName
      );
      res.status(200).json(locationArea);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error al obtener la info de la LocationArea" });
    }
  },
};
