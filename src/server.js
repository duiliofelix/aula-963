const express = require('express');
const { engine } = require('express-handlebars');
const { PORT } = require('./config');
const { bankRouter, movRouter, viewsRouter } = require('./routes');
const authRouter = require('./routes/auth');
const errorHandler = require('./middlewares/errorHandler');
const authHandler = require('./middlewares/authHandler');
const logger = require('./middlewares/logger');

const server = express();
const middJson = express.json();


server.engine('handlebars', engine());
server.set('view engine', 'handlebars');
server.set('views', './src/views');

server.use(middJson);
server.use(logger);

server.use(authRouter);
server.use(authHandler);

server.use(viewsRouter);
server.use('/banco', bankRouter);
server.use('/movimentacoes', movRouter);

server.use(errorHandler);

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
