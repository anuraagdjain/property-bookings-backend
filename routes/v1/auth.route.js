const express = require("express");
const router = express.Router();
const passportMW = require("../../middlewares/passport.middleware");

const { authController, validator } = require("../../controllers/v1/auth");

router.post("/signin", validator.loginSchema, authController.signin);
router.post("/signup", validator.signupSchema, authController.signup);
router.delete("/logout", passportMW.jwtAuth, authController.logout);

module.exports = router;
