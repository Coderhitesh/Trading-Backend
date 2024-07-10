const mongoose = require('mongoose')

const BlogShema = new mongoose.Schema({
    title: {
        type: String,
    },
    content: {
        type: String,
    },
    image: {
        type: String,
    }
})

const BlogModel = mongoose.model('Blog', BlogShema)

module.exports = BlogModel