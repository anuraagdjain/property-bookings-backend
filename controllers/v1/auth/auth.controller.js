"use strict";
const { userService } = require("../../../lib/services/v1");
const { errorHandler } = require("../../../lib/utils");

module.exports = {
  signin: async (req, res, next) => {
    const passport = require("passport");
    passport.authenticate("local", { session: false }, (err, data, info) => {
      if (err || info) return res.serverFail(401, errorHandler(err || info));
      return res.success(data);
    })(req, res, next);
  },

  signup: async (req, res) => {
    try {
      // 1. create user
      const user = await userService.createUser(req.body.user);
      // TODO: send welcome email
      return res.success({ user });
    } catch (error) {
      res.serverFail(400, errorHandler(error));
    }
  },

  logout: async (req, res) => {
    try {
      // TODO - perform tasks on logout
      return res.success();
    } catch (error) {
      return res.serverFail(400, errorHandler(error));
    }
  }
};
