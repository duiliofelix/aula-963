const { Router } = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const UserModel = require('../database/models/user');
const { JWT_SALT } = require('../config');

const router = Router();
const saltRounds = 10;

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const user = await UserModel.find({ username });
  if (!user || await bcrypt.compare(password, user.passEnc)) {
    res.status(401).send('Unauthorized');
  }

  const token = jwt.sign({ username, role: 'client', expiresIn: 3000 }, JWT_SALT);

  res
    .status(200)
    .send({
      token,
    });
});

router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  const user = await UserModel.find({ username });
  if (user) {
    res
      .status(400)
      .send('User already exists');
    return;
  }

  const newUser = new UserModel();
  newUser.username = username;
  newUser.passEnc = await bcrypt.hash(password, saltRounds);
  await newUser.save();

  res
    .status(201)
    .send();
});

module.exports = router;
