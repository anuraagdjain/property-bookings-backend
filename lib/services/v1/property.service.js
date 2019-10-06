"use strict";
const db = require("../../../models");

class PropertyService {
  static listAllProperties() {
    return db.property.findAndCountAll({
      order: [["createdAt", "DESC"]]
    });
  }

  static async isValidProperty(propertyId) {
    const property = await db.property.findOne({ where: { id: propertyId } });
    if (!property) {
      throw new Error("Invalid Property");
    }
    return true;
  }
}

module.exports = PropertyService;
