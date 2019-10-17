const router = require('express-promise-router');

const jwt = require('express-jwt');
const bodyParser = require('body-parser');
const HttpErrors = require('http-errors');

const RouterAccount = new router();

const createStructure = require('./createStructure');
const getStructures = require('./getStructures');
const deleteStructure = require('./deleteStructure');

RouterAccount.use([], jwt({ secret: process.env.WY_AUTH_SECRET }));

RouterAccount.post('/createStructure', async (req, res) => {
  if (
    !req.user ||
    !req.user.objectAccount ||
    !req.user.objectAccount.roles.include('admin')
  ) {
    throw HttpErrors.Unauthorized();
  }
  const structure = req.body;
  const InstanceStructure = await createStructure(structure);
  res.send(InstanceStructure);
});

RouterAccount.get('/getStructures', async (req, res) => {
  if (
    !req.user ||
    !req.user.objectAccount ||
    !req.user.objectAccount.roles.include('admin')
  ) {
    throw HttpErrors.Unauthorized();
  }
  const allStructure = await getStructures();
  res.send(allStructure);
});

RouterAccount.get('/getStructure', async (req, res) => {
  if (
    !req.user ||
    !req.user.objectAccount ||
    !req.user.objectAccount.roles.include('admin')
  ) {
    throw HttpErrors.Unauthorized();
  }
  const idStructure = req.user.objectAccount.structure;
  const allStructure = await getStructure(idStructure);
  res.send(allStructure);
});

RouterAccount.delete('/deleteStructure/:id', async (req, res) => {
  if (
    !req.user ||
    !req.user.objectAccount ||
    !req.user.objectAccount.roles.include('admin')
  ) {
    throw HttpErrors.Unauthorized();
  }
  const idStructure = await deleteStructure(req.body._id);
  res.send(idStructure);
});

module.exports = RouterAccount;
