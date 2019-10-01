"use strict";
const db = require("../../../models");
const { Logger } = require("../../../lib/utils");

/**
 * UserService
 * @description actions related to user account
 */
class UserService {
  /**
   *
   * @param {object} user
   * @returns {Promise<user|error>}
   * @description create user
   */
  static createUser(user) {
    return db.user.create(user);
  }

  /**
   *
   * @param {object} user
   * @param {string} id
   * @description update user data
   */
  static async updateUser(user, id) {
    await db.user.update(user, { where: { id } });
    user = await db.user.findOne({ where: { id } });
    return user;
  }

  /**
   *
   * @param {string} userId
   * @returns {Promise<db.user|error>}
   * @description get user from db via id
   */
  static async getUser(userId) {
    const user = await db.user.findOne({
      where: { id: userId },
      attributes: { exclude: ["password"] }
    });
    if (!user) {
      throw new Error("user not found");
    }
    return user;
  }
}

module.exports = UserService;
