const express = require('express');
const {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
} = require('../controllers/employeecontroller');

const router = express.Router();

// Create a new employee
router.post('/', createEmployee);

// Get all employees
router.get('/', getAllEmployees);

// Get an employee by ID
router.get('/:id', getEmployeeById);

// Update an employee by ID
router.put('/:id', updateEmployee);

// Delete an employee by ID
router.delete('/:id', deleteEmployee);

module.exports = router;
