const Account = require('../../models/Account');

async function updateAccount(account) {
  const updateUser = await Account.update({ in: account.in }, { account });
  return updateUser;
}

module.exports = updateAccount;
