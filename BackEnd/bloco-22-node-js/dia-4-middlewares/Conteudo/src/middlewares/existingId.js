const existingId = (req, res, next) => {
  const id = Number(req.params.id);
  const team = teams.find(t => t.id === id);

  if(team) {
    req.team = team;
    next();
  } else {
    res.sendStatus(404);
  }
}

module.exports = existingId;