const { bookingService, propertyService } = require("../../../lib/services/v1");
const { errorHandler } = require("../../../lib/utils");

module.exports = {
  create: async (req, res) => {
    try {
      const { booking } = req.body;
      // 1. check if property is valid
      await propertyService.isValidProperty(booking.propertyId);

      // 2. create booking
      const bookingObj = await bookingService.createBooking(
        booking,
        req.user.id
      );
      return res.success({ booking: bookingObj });
    } catch (error) {
      return res.serverFail(400, errorHandler(error));
    }
  }
};
