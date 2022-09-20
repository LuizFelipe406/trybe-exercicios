const verifyAdmin = (req, res, next) => {
 const { admin } = req.tokenInfo.data;
 if (admin === false) {
 return res.status(401).json({ error: {
  message: 'Restricted access',
} }); 
}
next();
};

module.exports = verifyAdmin;