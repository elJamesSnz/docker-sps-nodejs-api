const express = require("express");
const abilityController = require("../controllers/abilityController");

const router = express.Router();

router.get("/:name", abilityController.getAbility);

module.exports = router;
