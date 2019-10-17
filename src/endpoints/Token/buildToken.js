const jwt = require('jsonwebtoken');
const random = require('random-key-generator');
const Account = require('../../models/Account');

async function buildToken(objectAccount) {
  const account = await Account.findOne(objectAccount);
  console.log(account);
  const key = random(100);
  if (account) {
    const token = jwt.sign({ objectAccount, key }, process.env.WY_AUTH_SECRET, {
      expiresIn: '2d',
      issuer: 'auth',
    });
    console.log(token);
    return token;
  } else {
    return 'Not User Found';
  }
}

module.exports = buildToken;
