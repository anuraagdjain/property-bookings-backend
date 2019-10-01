"use strict";
const Joi = require("joi");
const { errorHandler } = require("../../../lib/utils");

const signupSchema = (req, res, next) => {
  const schema = Joi.object().keys({
    user: Joi.object()
      .keys({
        email: Joi.string()
          .email()
          .required(),
        firstName: Joi.string().required(),
        lastName: Joi.string(),
        password: Joi.string().required()
      })
      .required()
  });
  Joi.validate(req.body, schema, (err, value) => {
    if (err) return res.serverFail(400, errorHandler(err));
    next();
  });
};

const loginSchema = (req, res, next) => {
  const schema = Joi.object().keys({
    user: Joi.object()
      .keys({
        email: Joi.string()
          .email()
          .required(),
        password: Joi.string().required()
      })
      .required()
  });
  Joi.validate(req.body, schema, (err, value) => {
    if (err) return res.serverFail(400, errorHandler(err));
    next();
  });
};

module.exports = {
  signupSchema,
  loginSchema
};
