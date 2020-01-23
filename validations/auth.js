// Package dependencies
const { body } = require('express-validator');

// Utils
const Accounts = require('../utils/accounts.json');

const validateUser = body('user')
  .not()
  .isEmpty()
  .withMessage('User is required')
  .isString()
  .withMessage('User must be text')
  .custom(user => Accounts.find(account => account.user === user))
  .withMessage('User does not exist');

const validatePassword = body('password')
  .not()
  .isEmpty()
  .withMessage('Password is required')
  .isLength({ min: 4 })
  .withMessage('Password must have at least 4 characters');

/**
 * Holds all validations for login.
 */
const validateLoginProps = [validateUser, validatePassword];

module.exports = {
  validateLoginProps,
};
