const express = require('express');
const contreller = require('../controller/position');
const passport = require('passport');
const router = express.Router();

router.get('/:categoryId', passport.authenticate('jwt', {session: false}), contreller.getByCategoryId);
router.post('/', passport.authenticate('jwt', {session: false}), contreller.create);
router.patch('/:id', passport.authenticate('jwt', {session: false}), contreller.update);
router.delete('/:id', passport.authenticate('jwt', {session: false}),  contreller.remove);

module.exports = router;