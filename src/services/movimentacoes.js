const moment = require('moment');
const MovimentacoesModel = require('../database/models/movimentacoes');

const findMovimentacoesByType = async (type, limit) => 
  MovimentacoesModel.find({
    type,
  }, {
    limit,
  });


const createMovimentacao = async ({ type, value, date }) => {
  const novaMovimentacao = new MovimentacoesModel();

  novaMovimentacao.setBody({ type, value, date });

  return await novaMovimentacao.save();
};

const updateMovimentacaoById = async (id, { type, value, date }) => {
  const movimentacao = await MovimentacoesModel.findById(id);

  movimentacao.setBody({ type, value, date });

  return await movimentacao.save();
};

module.exports = {
  createMovimentacao,
  findMovimentacoesByType,
  updateMovimentacaoById,
};
