const express = require('express');
const contreller = require('../controller/analytics');
const router = express.Router();

router.get('/overview', contreller.overview);
router.get('/analytics', contreller.analytics);

module.exports = router;