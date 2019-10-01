"use strict";
const passport = require("passport");
const passportJwt = require("passport-jwt");
const LocalStratergy = require("passport-local").Strategy;
const JWTStratergy = passportJwt.Strategy;
const ExtractJWT = passportJwt.ExtractJwt;
const db = require("../models");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");
const jwtConfig = require("./jwt.config");
const { jwtUtil } = require("../lib/utils");

passport.use(
  new LocalStratergy(
    {
      usernameField: "user[email]",
      passwordField: "user[password]",
      passReqToCallback: true
    },
    async (req, email, password, done) => {
      try {
        const user = await db.user.findOne({ where: { email } });
        if (user) {
          if (bcrypt.compareSync(password, user.password)) {
            const token = jwtUtil.generateToken({
              id: user.id,
              mobile: user.mobile
            });
            return done(null, { user, token });
          }
        }
        throw new Error("Invalid credentials");
      } catch (error) {
        return done(error, null);
      }
    }
  )
);

passport.use(
  new JWTStratergy(
    {
      ...jwtConfig,
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtConfig.secretKey
    },
    async (payload, done) => {
      try {
        if (payload) {
          // const jwtToken = jsonwebtoken.sign(payload, jwtConfig.secretKey);
          const user = await db.user.findOne({
            where: { mobile: payload.mobile, id: payload.id }
          });
          if (user) {
            return done(null, user);
          }
        }
        throw new Error("Invalid credentials");
      } catch (error) {
        return done(error, null);
      }
    }
  )
);
