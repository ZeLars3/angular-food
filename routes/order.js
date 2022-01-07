const express = require('express');
const contreller = require('../controller/order');
const passport = require('passport');
const router = express.Router();

router.get('/', passport.authenticate('jwt', {session: false}), contreller.getAll);
router.post('/', passport.authenticate('jwt', {session: false}), contreller.create);

module.exports = router;