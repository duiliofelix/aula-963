const mongoose = require('mongoose');

const movimentacoesSchema = new mongoose.Schema({
  type: String,
  value: Number,
  date: Date,
});

const MovimentacoesModel = mongoose.model('movimentacao', movimentacoesSchema);

module.exports = MovimentacoesModel;
