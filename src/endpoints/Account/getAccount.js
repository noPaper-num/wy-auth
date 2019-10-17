const Account = require('../../models/Account');

async function getAccount(inUser) {
  const getAccount = Account.find({ idNumber: inUser.idNumber });
  return getAccount;
}

module.exports = getAccount;
