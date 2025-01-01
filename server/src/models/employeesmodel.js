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
   
  },
  img_id: {
    type: String,
    default: null,
  },
  resume: {
    type: String,
    required: true,
    
  },
  joiningDate: {
    type: Date,
  },
  experience: {
    type: String,
    required: true,
  
  },
  mobileNumber: {
    type: String,
    required: true,
    match: /^[0-9]{10}$/, // Validates a 10-digit mobile number
  },
  email: {
    type: String,
    required: true,
    unique: true
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
