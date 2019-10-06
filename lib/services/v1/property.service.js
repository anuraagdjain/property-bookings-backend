"use strict";
const db = require("../../../models");

class PropertyService {
  static listAllProperties() {
    return db.property.findAndCountAll({
      order: [["createdAt", "DESC"]]
    });
  }
}

module.exports = PropertyService;
