const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URL, {
  useMongoClient: true,
  connectTimeoutMS: 24000,
  socketTimeoutMS: 24000,
});

mongoose.connection.on('open', () => console.log('Opening COnnection...'));
mongoose.connection.on('connected', () => console.log('Connected'));
mongoose.connection.on('error', () => console.error);
mongoose.connection.on('disconnected', () => console.error);

module.exports = mongoose;
