const bankRouter = require('./banco');
const boletoRouter = require('./boleto');
const movRouter = require('./movimentacao');
const viewsRouter = require('./views');

module.exports = {
    bankRouter,
    boletoRouter,
    movRouter,
    viewsRouter,
};
