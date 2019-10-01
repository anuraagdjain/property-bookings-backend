'use strict';
const { permissionTypes } = require('../config');

module.exports = (minimumRole = 'user') => {
  return (req, res, next) => {
    if (minimumRole === 'public') return next();
    return permissionTypes[req.user.role] >= permissionTypes[minimumRole]
      ? next()
      : res.serverFail(403, 'Access restricted.');
  };
};
