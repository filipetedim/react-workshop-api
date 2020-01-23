// Packages
const express = require('express');

// Controllers
const { login } = require('../controllers/auth');

// Validations
const { validateLoginProps } = require('../validations/auth');

// Init
const router = express.Router();

router.post('/', validateLoginProps, login);

module.exports = router;
