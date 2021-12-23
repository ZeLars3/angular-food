const express = require('express');
const contreller = require('../controller/category');
const router = express.Router();

router.get('/', contreller.getAll);
router.get('/:id', contreller.getCategoryById);
router.delete('/:id', contreller.remove);
router.post('/', contreller.create);
router.patch('/:id', contreller.update);

module.exports = router;