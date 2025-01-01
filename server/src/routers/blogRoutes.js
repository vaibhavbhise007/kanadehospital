const multer = require("multer");
const express = require('express');
const path = require('path');
const {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require('../controllers/blogcontroller');
// Multer configuration for handling file uploads
const storageProduct = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/storage/upload/image/blog");
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

const uploadProduct = multer({
  storage: storageProduct,
  fileFilter: fileFilter,
});

const router = express.Router();

// Create a new blog post
router.post('/', [uploadProduct.single("img")],createBlog);

// Get all blog posts
router.get('/', getAllBlogs);

// Get a single blog post by ID
router.get('/:id', getBlogById);

// Update a blog post by ID
router.put('/:id',[uploadProduct.single("img")], updateBlog);

// Delete a blog post by ID
router.delete('/:id', deleteBlog);

module.exports = router;
