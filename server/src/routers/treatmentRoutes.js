const express = require('express');
const {
  createTreatment,
  getAllTreatments,
  getTreatmentById,
  updateTreatment,
  deleteTreatment
} = require('../controllers/treatmentController');
const uploadFields = require('../configs/multerConfig');


const router = express.Router();

// Route to create a new treatment
router.post('/',uploadFields, createTreatment);

// Route to get all treatments
router.get('/', getAllTreatments);

// Route to get a single treatment by ID
router.get('/:id', getTreatmentById);

// Route to update a treatment by ID
router.put('/:id',uploadFields, updateTreatment);

// Route to delete a treatment by ID
router.delete('/:id', deleteTreatment);

module.exports = router;
