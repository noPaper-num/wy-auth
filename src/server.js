const cors = require('cors');
const bodyParser = require('body-parser');

const express = require('express');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/auth', require('./endpoints'));

module.exports = {
  start() {
    app.listen(process.env.PORT, process.env.HOST, () =>
      console.log('Starting on', process.env.PORT, process.env.HOST),
    );
  },
};

module.app = app;
