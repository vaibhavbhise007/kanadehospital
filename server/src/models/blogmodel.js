// title, category,img,content
const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  about:{
    type: String,
    required: true,
   
  },
  subtitle1: {
    type: String,
    required: true,
   
  },
  about1:{
    type: String,
    required: true,
   
  },
  subtitle2: {
    type: String,
    required: true,
    
  },
  about2:{
    type: String,
    required: true,
    
  },
  subtitle3: {
    type: String,
    required: true,
  },
  about3:{
    type: String,
    required: true,
    
  },
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
  },
  
}, {
  timestamps: true, // Automatically manages createdAt and updatedAt fields
});

module.exports = mongoose.model('Blog', BlogSchema);
