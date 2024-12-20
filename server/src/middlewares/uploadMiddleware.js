const multer = require("multer");
const path = require("path");

// Set up storage configuration for Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/storage/upload/image"); // Destination folder for uploaded files
  },
  filename: function (req, file, cb) {
    // Use the original file name with the timestamp to avoid name conflicts
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// Middleware to accept any file type (no restriction) and remove file size limit
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    cb(null, true);
  },
});

module.exports = upload;
