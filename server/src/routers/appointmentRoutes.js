const express = require('express');
const {
  createAppointment,
  getAllAppointments,
  getAppointmentById,
  updateAppointment,
  deleteAppointment,
} = require('../controllers/appoinmentcontroller');

const router = express.Router();

// Create a new appointment
router.post('/', createAppointment);

// Get all appointments
router.get('/', getAllAppointments);

// Get a single appointment by ID
router.get('/:id', getAppointmentById);

// Update an appointment
router.put('/:id', updateAppointment);

// Delete an appointment
router.delete('/:id', deleteAppointment);

module.exports = router;
