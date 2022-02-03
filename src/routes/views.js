const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.render('index.handlebars', { numero: 3 });
});

router.get('/show', (req, res) => {
  res.render('show.handlebars', { numero: 5 });
});

module.exports = router;
