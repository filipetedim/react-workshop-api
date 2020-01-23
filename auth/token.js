// Packages
const Jwt = require('jsonwebtoken');

// Configs
const Config = require('../config');

/**
 * Creates a token from an account object.
 * Uses the config token's secret and expiration.
 */
const createToken = account => {
  const { password, ...cleanAccount } = account;
  return Jwt.sign(
    { ...cleanAccount, TOKEN_VERSION: Config.Token.TOKEN_VERSION },
    Config.Token.TOKEN_SECRET,
    {
      expiresIn: Config.Token.TOKEN_EXPIRATION,
    },
  );
};

/**
 * Checks if the token exists, is valid, not expired, and in the correct version.
 * Returns the token or null.
 */
const validToken = token => {
  if (!token) {
    return null;
  }

  try {
    const decoded = Jwt.verify(token, Config.Token.TOKEN_SECRET);

    if (decoded.TOKEN_VERSION !== Config.Token.TOKEN_VERSION) {
      return null;
    }

    return decoded;
  } catch (e) {
    return null;
  }
};

module.exports = {
  createToken,
  validToken,
};
