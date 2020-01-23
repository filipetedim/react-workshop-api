// Packages
const Express = require('express');

// Init
const router = Express.Router();

// Routes
const Auth = require('./auth');
const News = require('./news');

// Middlewares
const { TokenMiddleware } = require('../auth');

// Registrations
router.use('/authenticate', Auth);
router.use('/news', TokenMiddleware.checkToken, News);
router.use((req, res) => res.status(404).json({ message: `${req.originalUrl} not found` }));

module.exports = router;
