const router = require('express-promise-router');

const jwt = require('express-jwt');
const bodyParser = require('body-parser');
const HttpErrors = require('http-errors');

const RouterAccount = new router();

const createAccount = require('./createAccount');
const deleteAccount = require('./deleteAccount');
const getAccount = require('./getAccount');
const updateAccount = require('./updateAccount');

RouterAccount.use(
  ['/updateAccount', '/getAccount'],
  jwt({ secret: process.env.WY_AUTH_SECRET }),
);

RouterAccount.post('/createAccount', async (req, res) => {
  if (
    !req.user ||
    !req.user.objectAccount ||
    !req.user.objectAccount.roles.includes('admin')
  ) {
    throw HttpErrors.Unauthorized();
  }
  const InstanceAccount = req.body;
  const createUser = await createAccount(InstanceAccount);
  res.send(createUser);
});

RouterAccount.delete('/deleteAccount/:idNumber', async (req, res) => {
  if (!req.user || !req.user.objectAccount) {
    throw HttpErrors.Unauthorized();
  }
  const deleteUser = await deleteAccount(req.params.idNumber);
  res.send(deleteUser);
});

RouterAccount.get('/getAccount', async (req, res) => {
  console.log(req.user);
  if (!req.user || !req.user.objectAccount) {
    throw HttpErrors.Unauthorized();
  }
  const getUser = await getAccount(req.user.objectAccount);
  res.send(getUser);
});

RouterAccount.patch('/updateAccount/:idNumber', async (req, res) => {
  if (!req.user || !req.user.objectAccount) {
    throw HttpErrors.Unauthorized();
  }
  const updateUser = await updateAccount(req.body);
  res.send(updateUser);
});

module.exports = RouterAccount;
