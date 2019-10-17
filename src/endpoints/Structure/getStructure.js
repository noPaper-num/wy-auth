const Structure = require('../../models/Structure');

async function getStructure(id) {
  const allStructure = await Structure.find({ _id: id });
  return allStructure;
}

module.exports = getStructure;
