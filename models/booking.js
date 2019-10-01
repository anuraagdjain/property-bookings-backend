"use strict";
module.exports = (sequelize, DataTypes) => {
  const booking = sequelize.define(
    "booking",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      propertyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "properties",
          key: "id"
        }
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id"
        }
      },
      checkIn: {
        type: DataTypes.DATE,
        allowNull: false
      },
      checkOut: {
        type: DataTypes.DATE,
        allowNull: false
      },
      status: DataTypes.STRING,
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
  booking.associate = function(models) {
    // associations can be defined here
    booking.belongsTo(models.user, {
      foreignKey: "userId"
    });
    booking.belongsTo(models.property, {
      foreignKey: "propertyId"
    });
  };
  return booking;
};
