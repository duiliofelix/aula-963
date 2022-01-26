const { Router, query } = require('express');
const MovimentacoesModel = require('../database/models/movimentacoes');

const router = Router();

const getTypeFromRequest = (request) => {
  switch (request) {
    case 'e':
    case 'Entrada':
    case 'entrada':
      return 'entrada';
    case 's':
    case 'saida':
    case 'Saida':
    default:
      return 'saida';
  }
}

const toClientMovimentacoes = (movimentacoes) => movimentacoes.map((mov) => ({
  tipo: mov.type,
  valor: mov.value,
  data: mov.date.format(),
}));

router.get('/:tipo?', async (request, response) => {
  const typeFilter = getTypeFromRequest(request);

  const movimentacoes = await MovimentacoesModel.find({
    type: typeFilter,
  }, {
    limit: Number(request.query.limit) || 0,
  });

  response
    .status(200)
    .json({
       status: 'ok',
       movimentacoes: toClientMovimentacoes(movimentacoes),
    });
});

router.post('/', async (request, response) => {
  const novaMovimentacao = new MovimentacoesModel();
  novaMovimentacao.type = "entrada";
  novaMovimentacao.value = 10;
  novaMovimentacao.date = new Date();
  await novaMovimentacao.save();

  response
    .status(201)
    .json({
        status: 'ok',
        movimentacao: novaMovimentacao,
    });
});


router.delete('/:id', (request, response) => {
    response
        .status(200)
        .json({
            status: 'deleted',
        });
});

module.exports = router;
