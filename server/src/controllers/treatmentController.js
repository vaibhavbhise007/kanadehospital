const Treatment = require('../models/treatmentmodel');
const { cloudinary } = require("../configs/cloudinary");

// Create a new treatment
const createTreatment = async (req, res) => {
  try {
    const { title, about, description, causes, symptoms, treatmentdetails } = req.body;
    const findTreatment = await Treatment.findOne({ title });
    if (findTreatment) {
      return res.status(400).json({ message: "Treatment already exists" });
    }

    let imageUrl = null;
    let imageId = null;
    // Assuming `req.files.img` is an array of uploaded files
    if (req.files && req.files.img && req.files.img.length > 0) {

      // Iterate over the array of files and upload each one
      for (const file of req.files.img) {
        const imageUploaded = await cloudinary.v2.uploader.upload(file.path);
        imageUrl = imageUploaded.secure_url;
        imageId = imageUploaded.public_id;
      }
    }

    const treatment = new Treatment({
      title,
      about,
      description,
      causes,
      symptoms,
      treatmentdetails,
      img: imageUrl,
      img_id: imageId,
    });

    await treatment.save();
    res.status(201).json({ message: 'Treatment created successfully', treatment });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all treatments
const getAllTreatments = async (req, res) => {
  try {
    const treatments = await Treatment.find();
    res.status(200).json(treatments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a treatment by ID
const getTreatmentById = async (req, res) => {
  try {
    const { id } = req.params;
    const treatment = await Treatment.findById(id);

    if (!treatment) {
      return res.status(404).json({ error: 'Treatment not found' });
    }

    res.status(200).json(treatment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a treatment by ID
const updateTreatment = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;

    const treatment = await Treatment.findById(id);
    if (!treatment) {
      return res.status(404).json({ error: 'Treatment not found' });
    }

    let imageUrl = treatment.img;
    let imageId = treatment.img_id;

    if (req.file) {
      if (treatment.img_id) {
        await cloudinary.v2.uploader.destroy(treatment.img_id);
      }

      const imageUploaded = await cloudinary.v2.uploader.upload(req.file.path);
      imageUrl = imageUploaded.secure_url;
      imageId = imageUploaded.public_id;
    }

    treatment.title = updates.title || treatment.title;
    treatment.about = updates.about || treatment.about;
    treatment.description = updates.description || treatment.description;
    treatment.causes = updates.causes || treatment.causes;
    treatment.symptoms = updates.symptoms || treatment.symptoms;
    treatment.treatmentdetails = updates.treatmentdetails || treatment.treatmentdetails;
    treatment.img = imageUrl;
    treatment.img_id = imageId;

    await treatment.save();
    res.status(200).json({ message: 'Treatment updated successfully', treatment });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a treatment by ID
const deleteTreatment = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTreatment = await Treatment.findByIdAndDelete(id);

    if (!deletedTreatment) {
      return res.status(404).json({ error: 'Treatment not found' });
    }

    if (deletedTreatment.img_id) {
      await cloudinary.v2.uploader.destroy(deletedTreatment.img_id);
    }

    res.status(200).json({ message: 'Treatment deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createTreatment,
  getAllTreatments,
  getTreatmentById,
  updateTreatment,
  deleteTreatment,
};
