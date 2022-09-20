const getMyUser = (req, res) => {
 res.status(200).json(req.tokenInfo.data);
};

module.exports = getMyUser;