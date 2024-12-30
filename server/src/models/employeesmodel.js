// empoyeename, designetion,img,resume,joining date,experience,mobile number, email, adress,travelling type(bus,card,bike)
const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  employeeName: {
    type: String,
    required: true,
    trim: true,
  },
  designation: {
    type: String,
    required: true,
    trim: true,
  },
  img: {
    type: String,
    required: true,
    validate: {
      validator: function (url) {
        return /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg))$/i.test(url);
      },
      default:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
      message: 'Invalid image URL',
    },
  },
  resume: {
    type: String,
    required: true,
    validate: {
      validator: function (url) {
        return /^(https?:\/\/.*\.(?:pdf|doc|docx))$/i.test(url);
      },
      message: 'Invalid resume URL',
    },
  },
  joiningDate: {
    type: Date,
    required: true,
  },
  experience: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return /^[0-9]+(\.[0-9]{1,2})? years?$/.test(value);
      },
      message: 'Experience must be in years (e.g., "2 years" or "2.5 years")',
    },
  },
  mobileNumber: {
    type: String,
    required: true,
    match: /^[0-9]{10}$/, // Validates a 10-digit mobile number
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, // Validates an email address
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  travellingType: {
    type: String,
    enum: ['Bus', 'Car', 'Bike'],
    required: true,
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

module.exports = mongoose.model('Employee', EmployeeSchema);
