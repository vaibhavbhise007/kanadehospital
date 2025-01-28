const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  patientName: {
    type: String,
    required: true,
    trim: true,
  },
  mobile: {
    type: String,
    unique: true,
    required: true,

  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
  appointmentDateTime: {
    type: Date,
    default: new Date(),
    required: true,
  },
  expireDateTime: {
    type: Date,
    default: new Date(),
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  doctorName: {
    type: String,
    required: true,
    trim: true,
  },
  disease: {
    type: String,
    required: true,
    trim: true,
  },
  status:{
    type: String,
    default: 'pending',  // 'pending', 'approved', 'rejected'
    enum: ['pending', 'approved', 'rejected']
  }
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

const Appointment = mongoose.model("Appointment", AppointmentSchema);

module.exports = Appointment;