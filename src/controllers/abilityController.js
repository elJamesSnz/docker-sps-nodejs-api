const Ability = require("../models/abilityModel");

module.exports = {
  //petición asíncrona para recuper la info de habilidad
  async getAbility(req, res) {
    try {
      const abilityName = req.params.name;
      const ability = await Ability.getAbilityByName(abilityName);
      res.status(200).json(ability);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error al obtener la info de la habilidad" });
    }
  },
};
