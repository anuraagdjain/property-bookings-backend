'use strict';

module.exports = (req, res, next) => {
  res.success = data => res.status(200).json({ success: true, ...data });
  res.serverFail = (code, message) => res.status(code).json({ success: false, message });
  res.unauthorized = () => res.status(401).json({ success: false, message: 'Unauthorized' });
  next();
};
