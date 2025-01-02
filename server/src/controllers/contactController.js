const Contact = require('../models/contactmodel');

// Create a new contact message
const createContact = async (req, res) => {
  try {
    const { firstName, lastName, email, phoneNumber, message } = req.body;
// console.log(req.body)
    const contact = new Contact({
      firstName,
      lastName,
      email,
      phoneNumber,
      message
    });

    await contact.save();
    res.status(201).json({ message: 'Message sent successfully', contact });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all contact messages
const getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a contact message by ID
const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedContact = await Contact.findByIdAndDelete(id);

    if (!deletedContact) {
      return res.status(404).json({ error: 'Contact message not found' });
    }

    res.status(200).json({ message: 'Message deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createContact,
  getAllContacts,
  deleteContact,
};
