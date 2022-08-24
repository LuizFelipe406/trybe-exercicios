const express = require('express');
const nameValidation = require('../middlewares/nameValidation');
const priceValidation = require('../middlewares/priceValidation');
const descriptionValidation = require('../middlewares/descriptionValidation');
const createdAtValidation = require('../middlewares/createdAtValidation');
const ratingValidation = require('../middlewares/ratingValidation');
const difficultyValidation = require('../middlewares/difficultyValidation');
const auth = require('../middlewares/auth');
const activitiesRouter = express.Router();

activitiesRouter.post('/activities',
  auth,
  nameValidation,
  priceValidation,
  descriptionValidation,
  createdAtValidation,
  ratingValidation,
  difficultyValidation,
  (req, res) => {
  res.status(201).json({ "message": "Atividade cadastrada com sucesso!" })
})

module.exports = activitiesRouter;