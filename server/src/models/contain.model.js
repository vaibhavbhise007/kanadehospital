const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ContainSchema = new Schema({
    tital: {
        type: String,
        required: true,
        trim: true,
    },
    subcantain: {
        type: String,
        required: true,
    },
    blog:{
        type: Schema.Types.ObjectId,
        ref: "Blog",
      }
}, {
  timestamps: true, // Automatically manages createdAt and updatedAt fields
});

const Contain= mongoose.model('Contain', ContainSchema);
module.exports = Contain;