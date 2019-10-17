const mongoose = require('../config/mongoose');

const AccountSchema = new mongoose.Schema({
  idNumber: {
    type: String,
    unique: true,
  },
  lastName: {
    type: String,
  },
  firstName: {
    type: String,
  },
  roles: {
    type: [String],
  },
  structure: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Structure',
  },
});

const Account = mongoose.model('Account', AccountSchema);

module.exports = Account;
