"use strict";
const db = require("../../../models");
const moment = require("moment");
class BookingService {
  static createBooking(payload, userId) {
    if (moment.utc(payload.checkIn).isBefore(moment.utc())) {
      throw new Error("Check-In cannot be past date");
    }
    if (moment.utc(payload.checkOut).isBefore(moment.utc())) {
      throw new Error("Check-out cannot be past date");
    }
    if (moment.utc(payload.checkOut).isBefore(moment.utc(payload.checkIn))) {
      throw new Error("Check-out cannot be before Check-In date");
    }
    payload.userId = userId;
    payload.status = "paid"; // Fake payment accepted for demo
    return db.booking.create(payload);
  }

  static getBookingsOfUser(userId) {
    return db.booking.findAndCountAll({
      where: { userId },
      include: [
        {
          model: db.property,
          attributes: ["id", "name", "city", "address", "country"]
        }
      ]
    });
  }

  static listAllBookings() {
    return db.booking.findAndCountAll({
      order: [["createdAt", "DESC"]],
      include: [
        {
          model: db.property,
          attributes: ["id", "name", "city", "address", "country"]
        },
        {
          model: db.user,
          attributes: ["id", "firstName", "lastName", "email"]
        }
      ]
    });
  }
}

module.exports = BookingService;
