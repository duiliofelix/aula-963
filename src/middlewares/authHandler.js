const authHandler = (req, res, next) => {
  const header = req.headers.Authorization;
  
  const textao = header.split(' ')[1];

  const user = UserModel.find({ token: textao });
  if (!user) {
    res.status(401).send('NO');
  }

  req.user = user;

  next();
}

module.exports = authHandler;
