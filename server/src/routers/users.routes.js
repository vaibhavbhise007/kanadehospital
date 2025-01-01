// Import required modules and middle
const multer = require("multer");
const router = require("express").Router();
const path = require('path');
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUserRoleById,
  updateProfileById,
} = require("../controllers/users.controller");

const { verifyToken, isAdmin } = require("../middlewares/authJwt");
const {
  checkDuplicatedEmail,
  checkRolesExisted,
} = require("../middlewares/verifySignUp");
const {
  checkIsValidUser,
  checkIsValidUpdate,
} = require("../middlewares/userValidator");

// Multer configuration for handling file uploads
const storageProduct = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "src/storage/upload/image/profilePicture");
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

router.get("/", [verifyToken], getAllUsers);

router.get("/:id", [verifyToken], getUserById);

router.put(
  "/me",
  [verifyToken, checkIsValidUpdate, uploadProduct.single("img")],
  updateProfileById
);

router.put(
  "/role/:id",
  [verifyToken, isAdmin, checkRolesExisted],
  updateUserRoleById
);

router.post(
  "/",
  [
    verifyToken,
    isAdmin,
    checkDuplicatedEmail,
    checkRolesExisted,
    checkIsValidUser,
  ],
  createUser
);

module.exports = router;
