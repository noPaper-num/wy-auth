const Structure = require('../../models/Structure');

async function getStructures() {
  const allStructure = await Structure.find();
  return allStructure;
}

module.exports = getStructures;
