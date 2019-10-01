"use strict";
const passport = require("passport");
const { errorHandler } = require("../lib/utils");

module.exports.jwtAuth = (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (err, user, info) => {
    if (err || info) return res.serverFail(401, errorHandler(err || info));
    req.user = user;
    next();
  })(req, res, next);
};
