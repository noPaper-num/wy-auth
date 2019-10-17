const Account = require('../../models/Account');
const HttpError = require('http-errors');

async function createAccount(account) {
  const getInstanceAccount = await Account.findOne({
    idNumber: account.idNumber,
  });
  if (getInstanceAccount) {
    throw HttpError.Unauthorized();
  } else {
    console.log(account);
    const newAccount = await Account.create(account);
    console.log(newAccount);
    return newAccount;
  }
}
module.exports = createAccount;
