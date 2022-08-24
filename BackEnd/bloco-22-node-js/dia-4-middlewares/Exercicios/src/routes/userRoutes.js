const express = require('express');
const userValidation = require('../middlewares/userValidation');
const generateToken = require('../middlewares/generateToken');

const userRouter = express.Router();

userRouter.post('/signup', userValidation, generateToken, (req, res) => {
  const token = req.token;
  res.status(200).json({ token });
})

module.exports = userRouter;