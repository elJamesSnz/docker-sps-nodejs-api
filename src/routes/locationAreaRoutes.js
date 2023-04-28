const express = require("express");
const locationAreaController = require("../controllers/locationAreaController");

const router = express.Router();

router.get("/:name", locationAreaController.getLocationArea);

module.exports = router;
