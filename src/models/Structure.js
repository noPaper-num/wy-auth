const mongoose = require('mongoose');

const structureSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  typeStructure: {
    type: String,
  },
  address: {
    type: String,
  },
  phoneNumber: {
    type: String,
    unique: true,
  },
});

const Structure = mongoose.model('Structure', structureSchema);

module.exports = Structure;
