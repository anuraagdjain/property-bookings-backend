"use strict";
const sequelize = require("sequelize");
const Logger = require("./logger");

module.exports = error => {
  let message;
  if (error instanceof sequelize.ValidationError) {
    message = error.errors.map(e => e.message).join(",");
  } else if (error.isJoi) {
    message = error.details
      .map(e => e.message)
      .join(", ")
      .replace(/"/g, "");
  } else if (error instanceof Error) {
    try {
      message = error.message;
    } catch (e) {
      message = "Something went wrong";
    }
  }
  Logger.exception("Error ==>", message, error);
  return message;
};
