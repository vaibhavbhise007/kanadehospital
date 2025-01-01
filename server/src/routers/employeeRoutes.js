const multer = require("multer");
const express = require('express');
const path = require('path');
const {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
} = require('../controllers/employeecontroller');


// Multer configuration for handling file uploads
const storageProduct = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/storage/upload/image/employeePicture");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// File filter for allowing only images
const fileFilter = (req, file, cb) => {
  if (!file) {
    cb(null, false);
  } else {
    // Check for image files only
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(
      path.extname(file.originalname).toLowerCase()
    );
    const mimetype = filetypes.test(file.mimetype);

    if (extname && mimetype) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed!"), false);
    }
  }
};

// Set up multer upload middleware
const uploadProduct = multer({
  storage: storageProduct,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB max size
  fileFilter: fileFilter,
});

const router = express.Router();

// Create a new employee
router.post('/',[uploadProduct.single("img")], createEmployee);

// Get all employees
router.get('/', getAllEmployees);

// Get an employee by ID
router.get('/:id', getEmployeeById);

// Update an employee by ID
router.put('/:id',[uploadProduct.single("img")], updateEmployee);

// Delete an employee by ID
router.delete('/:id', deleteEmployee);

module.exports = router;
