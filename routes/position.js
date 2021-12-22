const express = require('express');
const contreller = require('../controller/position');
const router = express.Router();

router.get('/:categoryId', contreller.getByCategoryId);
router.post('/', contreller.create);
router.patch('/:id', contreller.update);
router.delete('/:id', contreller.remove);

module.exports = router;