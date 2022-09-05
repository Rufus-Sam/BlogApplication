const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title : {
        type: String,
        required : true
    },
    image : {
        type: String,
        required : true
    },
    description: {
        type: String,
        required : true
    },
    lastModified: {
        type: Date,
        default: ()=>  Date.now()
    }
})
const Blogs = mongoose.model('Blog',blogSchema);
module.exports = Blogs;