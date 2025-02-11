// title, category,img,content
const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  subtitle:{
    type: String,
    required: true,
  },
  contain:[ {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Contain",
  }],
  img: {
    type: String,
    required: false
  },
  img_id: {
    type: String,
    required: false
  },
  author: {
    type: String,
    required: true,
  }
}, {
  timestamps: true, // Automatically manages createdAt and updatedAt fields
});

module.exports = mongoose.model('Blog', BlogSchema);
