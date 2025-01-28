const Blog = require('../models/blogmodel');
const {User}= require('../models/user.model');
const { cloudinary } = require("../configs/cloudinary");

// Create a new blog post
const createBlog = async (req, res) => {
  try {
    const { title, about, subtitle1,about1,subtitle2, about2,subtitle3,about3,author } = req.body;
    const findBlog = await Blog.findOne({ title: title });
    if (findBlog) {
      return res.status(400).json({ error: 'Blog title already exists' });
    }
    let imageUrl = null;
    let imageId = null;
    // Assuming `req.files.img` is an array of uploaded files
if (req.files && req.files.img && req.files.img.length > 0) {

  // Iterate over the array of files and upload each one
  for (const file of req.files.img) {
    const imageUploaded = await cloudinary.v2.uploader.upload(file.path);
      imageUrl=imageUploaded.secure_url;
      imageId= imageUploaded.public_id;
  }
}

    const blog = new Blog({
      title,
      about,
      subtitle1,
      about1,
      subtitle2,
      about2,
      subtitle3,
      about3,
      img: imageUrl,
      img_id: imageId,
      author: author || 'Admin', // Default to 'Admin' if not provided
    });

    await blog.save();
    res.status(201).json({ message: 'Blog created successfully', blog });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all blog posts
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single blog by ID
const getBlogById = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);

    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a blog post by ID
// const updateBlog = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updates = req.body;

//     const findBlog = await Blog.findOne({title: updates.title});
//     if (findBlog) {
//       return res.status(400).json({ error: 'Blog title already exists' });
//     }

//     const updatedBlog = await Blog.findByIdAndUpdate(id, updates, { new: true });

//     if (!updatedBlog) {
//       return res.status(404).json({ error: 'Blog not found' });
//     }

//     res.status(200).json({ message: 'Blog updated successfully', updatedBlog });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
// Update a blog post by ID
const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, about, subtitle1,about1,subtitle2, about2,subtitle3,about3,author } = req.body;

    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ error: 'Blog not found' });
    }

    if (title && title !== blog.title) {
      const findBlog = await Blog.findOne({ title });
      if (findBlog) {
        return res.status(400).json({ error: 'Blog title already exists' });
      }
    }

    let imageUrl = blog.img;
    let imageid = blog.img_id;
    if (req.file) {
      // Delete the old image from Cloudinary
      if (blog.img_id) {
        await cloudinary.v2.uploader.destroy(blog.img_id);
      }

      const imageUploaded = await cloudinary.v2.uploader.upload(req.file.path);
      imageUrl = imageUploaded.secure_url;
      imageid = imageUploaded.public_id;
    }

    blog.title = title || blog.title;
    blog.about = about || blog.about;
    blog.subtitle1 = subtitle1 || blog.subtitle1;
    blog.about1 = about1 || blog.about1;
    blog.subtitle2 = subtitle2 || blog.subtitle2;
    blog.about2 = about2 || blog.about2;
    blog.subtitle3 = subtitle3 || blog.subtitle3;
    blog.about3 = about3 || blog.about3;
    blog.author = author || blog.author;
    blog.img = imageUrl;
    blog.img_id = imageid;

    await blog.save();
    res.status(200).json({ message: 'Blog updated successfully', blog });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Delete a blog post by ID
const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedBlog = await Blog.findByIdAndDelete(id);

    if (!deletedBlog) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    const blogsPost = await Blog.find();
    res.status(200).json({ message: 'Blog deleted successfully', blogs: blogsPost });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
};
