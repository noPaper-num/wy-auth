const router = require('express-promise-router');

const Router = new router();

Router.use('/account', require('./Account'));
Router.use('/structure', require('./Structure'));
Router.use('/token', require('./Token'));

module.exports = Router;
