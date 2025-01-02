const express = require('express');
const {
  createContact,
  getAllContacts,
  deleteContact
} = require('../controllers/contactController');

const router = express.Router();

// Route to create a new contact message
router.post('/', createContact);

// Route to get all contact messages
router.get('/', getAllContacts);

// Route to delete a contact message by ID
router.delete('/:id', deleteContact);

module.exports = router;
