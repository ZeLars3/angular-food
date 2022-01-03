const Category = require('../models/category');
const Position = require('../models/position');
const errorHandler = require('../utils/errorHandler');

module.exports.getAll = async function(req, res) {
    try {
        const categories = await Category.find({
            user: req.user.id,
        });
        res.status(200).json(categories);
    } catch (err) {
        errorHandler(res, err);
    }
};

module.exports.getCategoryById = async function(req, res) {
    try {
        const category = await Category.findById(re.params.id);
        res.status(200).json(category);
    } catch (err) {
        errorHandler(res, err);
    }
};

module.exports.remove = async function(req, res) {
    try {
        await Caregor.remove({
            _id: req.params.id,
        });
        await Position.remove({
            category: req.params.id,
        });
        res.status(200).json({
            message: 'Category deleted',
        });
    } catch (err) {
        errorHandler(res, err);
    }
};

module.exports.create = async function(req, res) {
    try {
        const category = await new Category({
            name: req.body.name,
            user: req.user.id,
            imageSrc: req.body.imageSrc,
        });

        await category.save();
        res.status(201).json(category);
    } catch (err) {
        errorHandler(res, err);
    }
};

module.exports.update = async function(req, res) {
    try {
        const category = await Category.findOneAndUpdate(
            {_id: req.params.id},
            {$set: req.body},
            {new: true}
        );
        res.status(200).json(category);
    } catch (err) {
        errorHandler(res, err);
    }
};