const { Router } = require('express');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const BoletoModel = require('../database/models/boleto');

const router = Router();
const publicPath = path.resolve(__dirname, '..', '..', 'public');

const getExtension = (fileName) => {
  const chunks = fileName.split('.');
  return chunks[chunks.length - 1];
}

router.get('/', async (req, res) => {
  const boletos = await BoletoModel.find();

  res
    .status(200)
    .send(boletos);
});

router.post('/', async (req, res) => {
  const file = req.files.meu_arquivo;

  const taggedName = `${uuidv4()}.${getExtension(file.name)}`;
  const caminho = path.join(publicPath, 'boletos', taggedName);

  await file.mv(caminho);

  const boleto = new BoletoModel();
  boleto.url = taggedName;
  await boleto.save();

  res
    .status(201)
    .send(boleto);
});

module.exports = router;
