const express = require("express");
const router = express.Router();
const { propertyController } = require("../../controllers/v1/property");

router.get("/", propertyController.listAllProperties);

module.exports = router;
