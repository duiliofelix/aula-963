const ParamNotFoundError = require('../errors/ParamNotFound');

const handleDBError = (err, req, res, next) => {
  if (err instanceof ParamNotFoundError) {
    res.status(400).send(`Você esqueceu o parametro ${err.paramName}`);
  } else if (err instanceof Error) {
    res.status(500).send('Erro não tratado');
  } else {
    next(err);
  }
};