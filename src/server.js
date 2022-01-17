const express = require('express');
const { PORT } = require('./config');
const { bankRouter, movRouter } = require('./routes');

const server = express();


const middJson = express.json();
server.use(middJson);


server.use('/banco', bankRouter);
server.use('/movimentacoes', movRouter);


server.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});
