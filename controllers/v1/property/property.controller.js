"use strict";
const { propertyService } = require("../../../lib/services/v1");
const { errorHandler } = require("../../../lib/utils");
module.exports = {
  listAllProperties: async (req, res) => {
    try {
      // 1. fetch all properties
      const properties = await propertyService.listAllProperties();
      return res.success({ properties });
    } catch (error) {
      return res.serverFail(400, errorHandler(error));
    }
  },

  getPropertyBookings: async (req, res) => {
    try {
      // 1. fetch all properties
      await propertyService.isValidProperty(req.params.id);
      const property = await propertyService.getAllBookingForProperty(
        req.params.id
      );
      return res.success({ property });
    } catch (error) {
      return res.serverFail(400, errorHandler(error));
    }
  }
};
