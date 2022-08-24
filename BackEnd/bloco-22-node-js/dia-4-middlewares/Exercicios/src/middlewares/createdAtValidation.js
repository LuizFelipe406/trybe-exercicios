const createdAtValidation = (req, res, next) => {
  const { createdAt } = req.body.description;
  const regex = /^[0-9]{2}[\/]{1}[0-9]{2}[\/]{1}[0-9]{4}$/g;
  if (!regex.test(createdAt)) {
    return res.status(400).json({ "message": "O campo createdAt deve ter o formato \'dd/mm/aaaa\'" });
  }
  next();
}

module.exports = createdAtValidation;