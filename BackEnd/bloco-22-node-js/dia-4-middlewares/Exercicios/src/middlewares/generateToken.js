const crypto = require('crypto');

function generateToken(req, res, next) {
  const token = crypto.randomBytes(8).toString('hex');
  req.token = token;
  console.log(token);
  next();
}

module.exports = generateToken;