"use strict";
module.exports = (sequelize, DataTypes) => {
  const property = sequelize.define(
    "property",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: DataTypes.STRING,
      photo: DataTypes.STRING,
      lat: { type: DataTypes.FLOAT, allowNull: false, required: true },
      lng: { type: DataTypes.FLOAT, allowNull: false, required: true },
      address: DataTypes.STRING,
      city: DataTypes.STRING,
      country: DataTypes.STRING,
      zip: DataTypes.STRING,
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    },
    {}
  );
  property.associate = function(models) {
    property.hasMany(models.booking, {
      foreignKey: "propertyId"
    });
  };
  return property;
};
