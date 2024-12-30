const Appointment= require('../models/appointmentmodel');

// Create a new appointment
const createAppointment = async (req, res) => {
  try {
    const { patientName, address, mobile, appointmentDateTime, expireDateTime, time, doctorName, disease } = req.body;
    

    const findmobile = await Appointment.findOne({ mobile: mobile });

    if (findmobile) {
      return res.status(409).json({ error: 'Mobile number already exists' });
    }
    // Ensure expiry time is after appointment time
    if (new Date(expireDateTime) <= new Date(appointmentDateTime)) {
      return res.status(400).json({ error: 'Expire datetime must be after appointment datetime' });
    }

    const appointment = new Appointment({
      patientName,
      address,
      mobile,
      appointmentDateTime,
      expireDateTime,
      time,
      doctorName,
      disease,
    });

    await appointment.save();
    res.status(201).json({ message: 'Appointment created successfully', appointment });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// Get all appointments
const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).json(appointments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single appointment by ID
const getAppointmentById = async (req, res) => {
  try {
    const { id } = req.params;
    const appointment = await Appointment.findById(id);

    if (!appointment) {
      return res.status(404).json({ error: 'Appointment not found' });
    }

    res.status(200).json(appointment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update an appointment
const updateAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const findmobile = await Appointment.findOne({ mobile: updates.mobile });
    if (findmobile) {
      return res.status(409).json({ error: 'Mobile number already exists' });
    }

    const updatedAppointment = await Appointment.findByIdAndUpdate(id, updates, { new: true });

    if (!updatedAppointment) {
      return res.status(404).json({ error: 'Appointment not found' });
    }

    res.status(200).json({ message: 'Appointment updated successfully', updatedAppointment });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete an appointment
const deleteAppointment = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedAppointment = await Appointment.findByIdAndDelete(id);

    if (!deletedAppointment) {
      return res.status(404).json({ error: 'Appointment not found' });
    }

    res.status(200).json({ message: 'Appointment deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createAppointment,
  getAllAppointments,
  getAppointmentById,
  updateAppointment,
  deleteAppointment,
};
