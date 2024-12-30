const Employee = require('../models/employeesmodel');

// Create a new employee
const createEmployee = async (req, res) => {
  try {
    const { employeeName, designation, img, resume, joiningDate, experience, mobileNumber, email, address, travellingType } = req.body;
    const findemployee =await Employee.findOne({ employeeName: employeeName });
    if (findemployee) {
      return res.status(400).json({ message: "Employee already exists" });
      }

    const employee = new Employee({
      employeeName,
      designation,
      img,
      resume,
      joiningDate,
      experience,
      mobileNumber,
      email,
      address,
      travellingType,
    });

    await employee.save();
    res.status(201).json({ message: 'Employee created successfully', employee });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all employees
const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get an employee by ID
const getEmployeeById = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findById(id);

    if (!employee) {
      return res.status(404).json({ error: 'Employee not found' });
    }

    res.status(200).json(employee);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update an employee by ID
const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const findEmployee = await Employee.findOne({ employeeName: updates.employeeName });
    if (findEmployee) {
      return res.status(400).json({ error: 'Employee already exists' });
    }

    const updatedEmployee = await Employee.findByIdAndUpdate(id, updates, { new: true });

    if (!updatedEmployee) {
      return res.status(404).json({ error: 'Employee not found' });
    }

    res.status(200).json({ message: 'Employee updated successfully', updatedEmployee });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete an employee by ID
const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedEmployee = await Employee.findByIdAndDelete(id);

    if (!deletedEmployee) {
      return res.status(404).json({ error: 'Employee not found' });
    }

    res.status(200).json({ message: 'Employee deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
};
