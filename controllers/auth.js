// Dependencies
const { validationResult } = require('express-validator');

// Utils
const Users = require('../utils/accounts.json');

/**
 * Attempts to login a user.
 */
const login = (req, res) => {
  if (!validationResult(req).isEmpty()) {
    return res.status(400).json({ validationErrors: validationResult(req).array() });
  }

  const { user, password } = req.body;
  const account = Users.find(item => item.user === user);
  const validPassword = account.password === password;

  if (!validPassword) {
    return res.status(400).json({
      validationErrors: [{ param: 'password', msg: 'Password does not match', location: 'body' }],
    });
  }

  res.status(200).json({ user, name: account.name, token: account.token });
};

module.exports = {
  login,
};
