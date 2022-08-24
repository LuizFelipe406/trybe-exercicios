const descriptionValidation = (req, res, next) => {
  const { description } = req.body;
  const expectedKeys = ["createdAt", "rating", "difficulty"];

  if (!description) {
    return res.status(400).json({ "message": "O campo description é obrigatório" });
  }

  for (let key of expectedKeys) {
    if( !(Object.keys(description).includes(key)) ) {
      return res.status(400).json({ "message": `O campo ${key} é obrigatório`})
    }
  }
  next();
}

module.exports = descriptionValidation;