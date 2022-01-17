const { Router } = require('express');

const router = Router();

router.get('/:tipo?', (request, response) => {
    const movs = [
        { id: 1, tipo: 'entrada', valor: 10, data: new Date() },
        { id: 2, tipo: 'entrada', valor: 20, data: new Date() },
        { id: 3, tipo: 'saida', valor: 10, data: new Date() },
        { id: 4, tipo: 'saida', valor: 20, data: new Date() },
    ];

    const filteredMovs = request.params.tipo ? movs.filter((mov) => mov.tipo === request.params.tipo) : movs;
    const slicedMovs = request.query.limit ? filteredMovs.slice(0, request.query.limit) : filteredMovs;

    response
        .status(200)
        .json({
            status: 'ok',
            movimentacoes: slicedMovs,
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
