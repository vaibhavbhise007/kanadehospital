const express = require('express');
const {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require('../controllers/blogcontroller');

const router = express.Router();

// Create a new blog post
router.post('/', createBlog);

// Get all blog posts
router.get('/', getAllBlogs);

// Get a single blog post by ID
router.get('/:id', getBlogById);

// Update a blog post by ID
router.put('/:id', updateBlog);

// Delete a blog post by ID
router.delete('/:id', deleteBlog);

module.exports = router;
