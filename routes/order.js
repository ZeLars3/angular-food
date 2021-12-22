const express = require('express');
const contreller = require('../controller/order');
const router = express.Router();

router.get('/', contreller.getAll);
router.post('/', contreller.create);

module.exports = router;