const express = require("express");
const router = express.Router();
const {
  bookingController,
  validator
} = require("../../controllers/v1/booking");
const passportMW = require("../../middlewares/passport.middleware");

router.post(
  "/",
  passportMW.jwtAuth,
  validator.createBooking,
  bookingController.create
);

module.exports = router;
