const mongoose = require('mongoose');

const movimentacoesSchema = new mongoose.Schema({
  type: String,
  value: Number,
  date: Date,
});

movimentacoesSchema.methods.setBody = function ({ type, value, date }) {
  this.type = type;
  this.value = value;

  if (typeof date === 'string') {
    this.date = moment(date, 'YYYY-MM-DD hh:mm:ss').toDate();
  } else {
    this.date = date;
  }
};

const MovimentacoesModel = mongoose.model('movimentacao', movimentacoesSchema);

module.exports = MovimentacoesModel;
