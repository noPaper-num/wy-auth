const Structure = require('../../models/Structure');

async function createStructure(structure) {
  const structureAccount = await Structure.create(structure);
  return structureAccount;
}

module.exports = createStructure;
