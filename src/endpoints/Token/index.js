const Router = require('express-promise-router');
const jwt = require('express-jwt');
const buildToken = require('./buildToken');
const tokenRouter = new Router();

tokenRouter.post('/newToken', async (req, res) => {
  const connection = await buildToken(req.body);
  res.send(connection);
});

module.exports = tokenRouter;
