const logger = require('../services/logger');

const loggerMidd = (req, res, next) => {
  logger.info(`${req.method} - ${req.originalUrl}`);
  next();
};

module.exports = loggerMidd;
