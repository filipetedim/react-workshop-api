// Custom dependencies
const Token = require('./token');

/**
 * Checks if a token exists, and adds it to the request body.
 */
const checkToken = (req, res, next) => {
  const token = req.headers['x-access-token'];
  const tokenDecoded = Token.validToken(token);

  if (!tokenDecoded) {
    return res.status(401).json();
  }

  req.token = token;
  req.tokenDecoded = tokenDecoded;
  next();
};

module.exports = {
  checkToken,
};
