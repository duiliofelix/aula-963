const mongoose = require('mongoose');
const {
  MONGO_USER,
  MONGO_PASS,
  MONGO_HOST,
  MONGO_PORT,
  MONGO_DB,
} = require('../config');
const logger = require('../services/logger');


const mongoUrl = `mongodb://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`;

const connect = async () => {
  try {
    await mongoose.connect(mongoUrl);
    logger.info(`Conectado em ${mongoUrl}`);
  } catch(error) {
    logger.error(`Error on connect, retrying on 3s - ${error}`);
    setTimeout(connect, 3000);
  }
};
connect();
