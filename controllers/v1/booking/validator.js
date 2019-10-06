"use strict";
const Joi = require("joi");
const { errorHandler } = require("../../../lib/utils");

const createBooking = (req, res, next) => {
  const schema = Joi.object().keys({
    booking: Joi.object()
      .keys({
        propertyId: Joi.number().required(),
        checkIn: Joi.string().required(),
        checkOut: Joi.string().required()
      })
      .required()
  });
  Joi.validate(req.body, schema, (err, value) => {
    if (err) return res.serverFail(400, errorHandler(err));
    next();
  });
};

module.exports = {
  createBooking
};
