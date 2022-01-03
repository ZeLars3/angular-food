const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const  keys = require('../config/keys');
const errorHandlel = require('../utils/errorHandler');

module.exports.login = async function(req, res) {
    const person = await User.findOne({ email: req.body.email });
    if (!person) {
        res.status(404).json({
            message: 'User with this email does not exist',
        });
    }
    else {
        const result = await bcrypt.compare(req.body.password, person.password);
        if (result) {
            const token = jwt.sign({
                id: person._id, 
                email: person.email,
            }, keys.jwt, { expiresIn: '1h' });

            res.status(200).json({
                message: 'User logged in',
                token: `Bearer ${token}`,
            });
        }
        else {
            res.status(401).json({
                message: 'Password is incorrect',
            });
        }
    }
};

module.exports.register = async function(req, res) {
  const person = await User.findOne({ email: req.body.email });

    if (person) {
        res.status(409).json({
            message: 'User with this email already exists',
        });
    }
    else {
        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(req.body.password, salt);
        const user = new User({
            email: req.body.email,
            password: password,
        });
        try {
            const result = await user.save();
            res.status(201).json(result);
        } catch (err) {
            errorHandlel(res, err);
        }
    }
};