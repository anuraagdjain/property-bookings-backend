const express = require("express");
const router = express.Router();
const { userController } = require("../../controllers/v1/user");

// TODO: API must be protected via JWT.
router.get("/:id/bookings", userController.listMyBookings);

module.exports = router;
