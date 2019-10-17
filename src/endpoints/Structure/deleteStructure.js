const Structure = require('../../models/Structure');

async function deleteStructure(id) {
  const removeStructure = await Structure.findOneAndDelete({ _id: id });
  return removeStructure;
}

module.exports = deleteStructure;
