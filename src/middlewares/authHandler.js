const jwt = require('jsonwebtoken');
const { JWT_SALT } = require('../config');

const authHandler = (req, res, next) => {
  const header = req.headers.Authorization;

  if (!header) {
    res.status(401).send('Unauthorized!');
    return;
  }
  
  const token = header.split(' ')[1];

  try {
    const payload = jwt.verify(token, JWT_SALT);

    req.jwt = payload;
  
    next();
  } catch (err) {
    next(err);
  }
}

module.exports = authHandler;
