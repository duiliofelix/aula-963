const logger = require('../services/logger');

const loggerMidd = (req, res, next) => {
  logger.info(req.method, req.baseUrl);
  next();
};

module.exports = loggerMidd;
