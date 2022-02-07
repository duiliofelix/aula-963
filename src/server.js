const express = require('express');
const { engine } = require('express-handlebars');
const fileUploader = require('express-fileupload');
const { PORT } = require('./config');
const { bankRouter, boletoRouter, movRouter, viewsRouter } = require('./routes');
const authRouter = require('./routes/auth');
const errorHandler = require('./middlewares/errorHandler');
const authHandler = require('./middlewares/authHandler');
const logger = require('./middlewares/logger');

const server = express();

server.engine('handlebars', engine());
server.set('view engine', 'handlebars');
server.set('views', './src/views');

server.use(express.json());
server.use(express.static('./public'));
server.use(logger);
server.use(fileUploader({
  limits: { fieldSize: 10 * 1024 * 1024 },
  tempFileDir: './tmp',
}));

server.use(authRouter);
// server.use(authHandler);

server.use(viewsRouter);
server.use('/banco', bankRouter);
server.use('/movimentacoes', movRouter);
server.use('/boleto', boletoRouter);

server.use(errorHandler);

server.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
