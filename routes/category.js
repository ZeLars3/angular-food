const express = require('express');
const contreller = require('../controller/category');
const passport = require('passport');
const router = express.Router();

router.get('/', passport.authenticate('jwt', {session: false}), contreller.getAll);
router.get('/:id', passport.authenticate('jwt', {session: false}), contreller.getCategoryById);
router.delete('/:id', passport.authenticate('jwt', {session: false}), contreller.remove);
router.post('/', passport.authenticate('jwt', {session: false}) ,contreller.create);
router.patch('/:id', passport.authenticate('jwt', {session: false}), contreller.update);

module.exports = router;