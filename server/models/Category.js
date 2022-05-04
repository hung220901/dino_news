const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name:{ type: String, required: [true, 'Category must have name'], trim: true},
},{ timestamps:{ createdAt: true, updatedAt:false}})


const Category = mongoose.model('Category', categorySchema);
module.exports = Category;