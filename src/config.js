const {
    PORT = 3000,
    MONGO_USER,
    MONGO_PASS,
    MONGO_HOST,
    MONGO_SERVER,
    MONGO_PORT,
    MONGO_DB,
    JWT_SALT,
} = process.env;


module.exports = {
    JWT_SALT,
    PORT,
    MONGO_USER,
    MONGO_PASS,
    MONGO_HOST,
    MONGO_SERVER,
    MONGO_PORT,
    MONGO_DB,
};
