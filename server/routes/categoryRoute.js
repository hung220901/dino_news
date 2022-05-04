const express = require('express');
const {verifyToken} = require('../middlewares/verifyToken');
const Router = express.Router();

const{ getAllCategories, createOneCategory, updateOneCategory, deleteOneCategory} = require('../controllers/categoryController.js');

Router.route('/').get(getAllCategories).post(verifyToken, createOneCategory);
Router.route('/:categoryId').put(verifyToken, updateOneCategory).delete(verifyToken, deleteOneCategory);

module.exports = Router; 