const mongoose = require('mongoose');

const BoletoSchema = new mongoose.Schema({
  url: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

const BoletoModel = mongoose.model('boleto', BoletoSchema);

module.exports = BoletoModel;