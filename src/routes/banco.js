const { Router } = require('express');

const router = Router();

// GET /banco/
router.get('/', (request, response) => {
    console.log(request.query.teste);

    response
        .status(200)
        .json({ codigo: '033' });
});

module.exports = router;
