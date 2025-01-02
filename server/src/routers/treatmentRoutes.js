const multer = require("multer");
const express = require('express');
const path = require('path');
const {
  createTreatment,
  getAllTreatments,
  getTreatmentById,
  updateTreatment,
  deleteTreatment
} = require('../controllers/treatmentController');


// Multer configuration for handling file uploads
const storageProduct = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/storage/upload/image/treatment");
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

// Route to create a new treatment
router.post('/',[uploadProduct.single("img")], createTreatment);

// Route to get all treatments
router.get('/', getAllTreatments);

// Route to get a single treatment by ID
router.get('/:id', getTreatmentById);

// Route to update a treatment by ID
router.put('/:id',[uploadProduct.single("img")], updateTreatment);

// Route to delete a treatment by ID
router.delete('/:id', deleteTreatment);

module.exports = router;
