const jwt = require('jsonwebtoken');

const secret = 'meusupersecret';

module.exports = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: {
      message: 'Token not found',
    } });
  }

  try {
    const decoded = jwt.verify(token, secret);
    req.tokenInfo = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: err.message });
  }
};