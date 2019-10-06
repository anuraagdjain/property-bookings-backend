"use strict";
const db = require("../../../models");

class PropertyService {
  static listAllProperties(city, country) {
    const filterQuery = {};
    if (city) {
      filterQuery.city = city.toLowerCase();
    }
    if (country) {
      filterQuery.country = country.toLowerCase();
    }
    return db.property.findAndCountAll({
      order: [["createdAt", "DESC"]],
      where: filterQuery
    });
  }

  static async isValidProperty(propertyId) {
    const property = await db.property.findOne({ where: { id: propertyId } });
    if (!property) {
      throw new Error("Invalid Property");
    }
    return true;
  }

  static async getAllBookingForProperty(propertyId) {
    return db.property.findOne({
      where: { id: propertyId },
      include: [
        {
          model: db.booking,
          separate: true,
          include: [
            { model: db.user, attributes: ["id", "firstName", "lastName"] }
          ]
        }
      ]
    });
  }
}

module.exports = PropertyService;
