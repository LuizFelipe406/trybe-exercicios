const jwt = require('jsonwebtoken');

const secret = 'meusupersecret';

const isAdmin = (username, password) => (!!(username === 'admin' && password === 's3nh4S3gur4???'));

const login = (req, res) => {
  const { username, password } = req.body;

  if (!username || username.length < 5) {
    return res.status(401).json({ message: 'username Invalido' });
  }

  if (!password || password.length < 5) {
    return res.status(401).json({ message: 'password Invalido' });
  }

  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

  const token = jwt.sign({
    data: { username, admin: isAdmin(username, password) } }, secret, jwtConfig);

  res.status(200).json({ token });
};

module.exports = {
  login,
};
