const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title:{ type: String, required: [true, 'Post must have title'], trim: true},
    content:{ type: String, required: [true, 'Post must have content'], trim: true},
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Category'
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
},{ timestamps: true})


const Post = mongoose.model('Post', postSchema);
module.exports = Post;