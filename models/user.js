"use strict";
const bcrypt = require("bcrypt");
const { bcryptConfig } = require("../config");
const { omit } = require("lodash");

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define(
    "user",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      email: { type: DataTypes.STRING, allowNull: false, unique: true },
      password: { type: DataTypes.STRING, allowNull: false },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
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
  user.associate = function(models) {
    // associations can be defined here
    user.hasMany(models.booking,{
      foreignKey: 'userId'
    });
  };
  user.beforeSave((instance, opts) => {
    // save encrypted password only!
    if (instance.changed("password")) {
      instance.password = bcrypt.hashSync(
        instance.password,
        bcryptConfig.hashRound
      );
    }
  });
  user.prototype.toJSON = function() {
    const that = this.get({ plain: true });
    return omit(that, ["password", "createdAt", "updatedAt"]);
  };
  return user;
};
