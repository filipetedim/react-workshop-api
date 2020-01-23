// Packages
const Express = require('express');

// Init
const router = Express.Router();

// API versions
const v1 = require('./v1');

// Registrations
router.use('/v1', v1);
router.get('/', (req, res) => res.sendStatus(200));
router.use((req, res) => res.status(404).json({ message: `${req.originalUrl} not found` }));

module.exports = router;
