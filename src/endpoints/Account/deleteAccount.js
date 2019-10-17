const Account = require('../../models/Account');

async function deleteAccount(id) {
  const delAccount = await Account.remove({ _id: id });
  return delAccount;
}

module.exports = deleteAccount;
