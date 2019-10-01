"use strict";
module.exports = {
  issuer: process.env.APP_DOMAIN,
  audience: process.env.APP_DOMAIN,
  secretKey: process.env.JWT_SECRET_KEY,
  expiresIn: "1d"
};
