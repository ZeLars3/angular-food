const { query } = require('express');
const { getMaxListeners } = require('../models/order');
const Order = require('../models/order');
const errorHandler = require('../utils/errorHandler');

module.exports.getAll = async function(req, res) {
    const query = {
        user: req.user.id
    };

    if (req.query.start) {
        query.date = {
            $gte: req.query.start
        };
    }

    if (req.query.end) {
        if (!query.date) {
            query.date = {};
        }

        query.date.$lte = req.query.end;
    }

    if (req.query.order) {
        query.order = +req.query.order;
    }
    
    try {
        const orders = await Order.find(query).sort({ date: -1 }).skip(+req.query.offset).limit(+req.query.limit);
        res.status(200).json(orders);
    } catch (err) {
        errorHandler(res, err);
    }
};

module.exports.create = async function(req, res) {
    try {
        const lastOrder = await new Order.findOne({
            user: req.user.id
        }).sort({ date: -1});

        const maxOrder = lastOrder ? lastOrder.order : 0;

        const order = await new Order({
            date: req.body.date,
            order: maxOrder + 1,
            user: req.user.id,
            list: req.body.list,
        });

        await order.save();
        res.status(201).json(lastOrder);
    } catch (err) {
        errorHandler(res, err);
    }
};