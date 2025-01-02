// tretment title, about, keypoints,description,img,img_id
const mongoose = require('mongoose');

const treatmentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  about: {
    type: String,
    required: true
  },
  keypoints: {
    type: [String],
    required: true
  },
  description: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: false
  },
  img_id: {
    type: String,
    required: false
  }
});

const Treatment = mongoose.model('Treatment', treatmentSchema);
module.exports = Treatment;
