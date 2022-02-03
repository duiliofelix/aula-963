const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: String,
  passEnc: String,
  token: String,
});
const UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel;
