"use strict";
const jwt = require("jsonwebtoken");
const { jwtConfig } = require("../../config");
const jwtOptions = {
  issuer: jwtConfig.issuer,
  audience: jwtConfig.audience
};

const verifyToken = jwtToken => {
  return jwt.verify(jwtToken, jwtConfig.secretKey, jwtOptions);
};

const generateToken = (user, tokenType = "idToken") => {
  return jwt.sign({ ...user, tokenType }, jwtConfig.secretKey, jwtOptions);
};

module.exports = {
  verifyToken,
  generateToken
};
