const Account = require('../../models/Account');

async function updateAccount(account) {
  const updateUser = await Account.update(
    { idNumber: account.idNumber },
    { account },
  );
  return updateUser;
}

module.exports = updateAccount;
