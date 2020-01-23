// Packages
const express = require('express');

// Utils
const News = require('../utils/news.json');

// Init
const router = express.Router();

router.get('/', (req, res) => res.status(200).json(News));

module.exports = router;
