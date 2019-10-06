const express = require("express");
const router = express.Router();
const { propertyController } = require("../../controllers/v1/property");

router.get("/", propertyController.listAllProperties);
router.get("/:id/bookings", propertyController.getPropertyBookings);

module.exports = router;
