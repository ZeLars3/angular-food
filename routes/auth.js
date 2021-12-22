const express = require('express');
const contreller = require('../controller/auth');
const router = express.Router();

router.post('/login', contreller.login);
router.post('/register', contreller.register);

module.exports = router;