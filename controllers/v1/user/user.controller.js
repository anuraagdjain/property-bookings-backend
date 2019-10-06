"use strict";
const { errorHandler } = require("../../../lib/utils");
const { bookingService } = require("../../../lib/services/v1");

module.exports = {
  listMyBookings: async (req, res) => {
    try {
      // 1. fetch user's bookings
      const bookings = await bookingService.getBookingsOfUser(req.params.id);
      return res.success({ bookings });
    } catch (error) {
      return res.serverFail(400, errorHandler(error));
    }
  }
};
;