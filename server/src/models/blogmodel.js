// title, category,img,content
const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  img: {
    type: String,
    required: true,

  },
  content: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
  },
  
}, {
  timestamps: true, // Automatically manages createdAt and updatedAt fields
});

module.exports = mongoose.model('Blog', BlogSchema);
