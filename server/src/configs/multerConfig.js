const multer = require("multer");
const fs = require("fs");
const path = require("path");

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Ensure the uploads folder exists before attempting to create it.
    try {
      let uploadPath = "";
      if (req. originalUrl==='/api/blogs/') {
        uploadPath = "src/storage/upload/image/blogs/";
      }
      if(req. originalUrl==='api/treatments/') 
        uploadPath = "src/storage/upload/image/treatment/";
      else {
        uploadPath = "src/storage/upload/image/profilePicture/";
      }
      // Check if the upload path exists, if not, create it
      if (!fs.existsSync(uploadPath)) {
        fs.mkdirSync(uploadPath); // Ensure the uploads folder exists
      }

      cb(null, uploadPath); // Proceed with the upload path
    } catch (error) {
      console.error("Error in creating directory:", error.message);
      cb(new Error("Error in creating directory"));
    }
  },
  filename: (req, file, cb) => {
    try {
      const filename = `${Date.now()}-${file.originalname}`;
      cb(null, filename); // Set the file name
    } catch (error) {
      console.error("Error in setting filename:", error.message);
      cb(new Error("Error in setting filename"));
    }
  },
});

// No file filter (accept all types)
const upload = multer({ storage });
const uploadFields = upload.fields([{ name: "img", maxCount: 10 }]);
module.exports = uploadFields;