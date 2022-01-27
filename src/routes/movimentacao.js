const { Router } = require('express');
const ParamNotFoundError = require('../errors/ParamNotFound');
const {
  createMovimentacao,
  findMovimentacoesByType,
  updateMovimentacaoById,
} = require('../services/movimentacoes');
const MovimentacoesModel = require('../database/models/movimentacoes');

const router = Router();

router.get('/:tipo?', async (request, response) => {
  const type = request.params.tipo;
  const limit = Number(request.query.limit) || 0;

  if (!type) {
    throw new ParamNotFoundError('tipo');
  }

  const movimentacoes = await findMovimentacoesByType(type, limit);

  response
    .status(200)
    .json({
       status: 'ok',
       movimentacoes,
    });
});

router.post('/', async (request, response) => {
  const { tipo, valor, data } = request.body;

  const novaMovimentacao = await createMovimentacao({
    type: tipo,
    value: valor,
    date: data,
  });

  response
    .status(201)
    .json({
        status: 'ok',
        movimentacao: novaMovimentacao,
    });
});

router.put('/:id', async (request, response) => {
  const { tipo, valor, data } = request.body;

  await updateMovimentacaoById(request.params.id, {
    type: tipo,
    value: valor,
    date: data,
  });

  response
    .status(200)
    .json({
      status: 'ok',
      movimentacao,
    });
});

router.patch('/:id', async (request, response) => {
  const movimentacao = await MovimentacoesModel.findById(request.params.id);

  movimentacao.type = request.body.tipo;
  movimentacao.value = request.body.valor;
  movimentacao.date = request.body.data;

  await movimentacao.save();
  
  response
    .status(200)
    .json({
      status: 'ok',
      movimentacao,
    });
});

router.delete('/:id', async (request, response) => {
  const movimentacao = await MovimentacoesModel.findById(request.params.id);

  await movimentacao.delete();

  response
    .status(200)
    .json({
      status: 'ok',
    });
});

module.exports = router;
