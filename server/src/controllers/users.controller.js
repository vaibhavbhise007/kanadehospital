// const { cloudinary } = require("../config/cloudinary");
const { User } = require("../models/user.model");
const { Role } = require("../models/roles.model");
const { cloudinary } = require("../configs/cloudinary");

const fs = require("fs");

// Get all users
async function getAllUsers(req, res) {
  try {
    const users = await User.find().populate("roles");

    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

// Get user by ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id, { password: 0 }).populate(
      "roles"
    );

    return res.status(200).json({ successful: true, data: user });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error.message });
  }
};

// Update user's role by ID
async function updateUserRoleById(req, res) {
  const { roles } = req.body;

  try {
    let roleFound = await Role.findOne({ name: roles });
    if (!roleFound)
      return res
        .status(404)
        .json({ success: false, message: "Role not provided" });

    let user = await User.findById(req.params.id);

    if (!user)
      return res
        .status(404)
        .json({ success: false, message: "User not found" });

    user = await User.findByIdAndUpdate(
      req.params.id,
      { $set: { roles: roleFound._id } },
      { new: true }
    );
    updatedUser = await user.save();

    return res.status(200).json({ success: true, data: updatedUser });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: error.message });
  }
}

// Create user
const createUser = async (req, res) => {
  try {
    const { name, email, mobile, password, roles } = req.body;

    const rolesFound = await Role.find({ name: { $in: roles } });

    const id = mongoose.Types.ObjectId();
    const user = new User({
      _id: id,
      name,
      email,
      mobile,
      password,
      roles: rolesFound.map((role) => role._id),
    });

    user.password = await User.encryptPassword(user.password);

    const savedUser = await user.save();

    return res.status(201).json({
      success: true,
      data: {
        id: savedUser._id,
        username: savedUser.username,
        mobile: savedUser.mobile,
        email: savedUser.email,
        roles: savedUser.roles,
      },
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "something went wrong, fail to create user ",
    });
  }
};

// Function to update user profile and handle image upload
async function updateProfileById(req, res) {
  const {
    email,
    lastName,
    firstName,
    password,
    newPassword,
    street,
    area,
    state,
    city,
  } = req.body;
  const mobile = parseInt(req.body.mobile);
  const pinCode = parseInt(req.body.pinCodeNumber);
  const streetNumber = parseInt(req.body.houseNo);

  const fullName = `${firstName} ${lastName}`;
  const userAddress = `${street} ${streetNumber}, ${area}, ${city} , ${state}, ${pinCode}`;

  try {
    // Find the user by ID
    const userFound = await User.findById(req.userId);

    if (!userFound) {
      return res
        .status(404)
        .json({ success: false, message: "User Not Found" });
    }

    let encodedPassword;

    // Check and compare password if updating the password
    if (newPassword && password) {
      const matchPassword = await User.comparePassword(
        password,
        userFound.password
      );

      if (!matchPassword) {
        return res
          .status(401)
          .json({ token: null, message: "Invalid Password" });
      }

      encodedPassword = await User.encryptPassword(newPassword);
    }

    // If no file is uploaded, return an error
    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "No file uploaded" });
    }

    // Upload the image to Cloudinary
    const imageUploaded = await cloudinary.v2.uploader.upload(req.file.path);

    let profileState;

    // Determine profile state based on address and mobile
    if ((userAddress || userFound.address) && (mobile || userFound.mobile)) {
      profileState = "completed";
    } else {
      profileState = "uncompleted";
    }

    // Prepare the fields to update the user
    const updatedUserFields = {
      name: fullName || userFound.name,
      password: encodedPassword || userFound.password,
      email: email || userFound.email,
      address: userAddress || userFound.address,
      mobile: mobile || userFound.mobile,
      profileState: profileState,
      profilePicture: imageUploaded.secure_url || userFound.profilePicture,
      img_id: imageUploaded.public_id,
    };

    // Update user in the database
    const updatedUser = await User.findByIdAndUpdate(
      userFound.id,
      updatedUserFields,
      { new: true }
    );

    // Save the updated user
    await userFound.save();

    return res.status(200).json({
      success: true,
      user: updatedUser,
      message: "User updated successfully",
    });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ success: false, message: "Server-side error" });
  }
}

// Assuming you have defined relationships in your User, Store, Product, and Category models
// Controller to delete a user by ID
// async function deleteUserById(req, res) {
//     try {
//         const userId = req.params.id;

//         // Check if the user exists
//         const user = await User.findById(userId);

//         if (!user) {
//             return res.status(404).json({ success: false, message: 'User not found' });
//         }
//         // Delete associated store, products, and categories
//         if (user.store) {
//             // Find products associated with the store
//             const productsToDelete = await Product.find({ store: user.store });
//             // Delete the product images from cloudinary and their associated categories
//             for (const product of productsToDelete) {
//                 await cloudinary.uploader.destroy(product.img);
//                 await cloudinary.uploader.destroy(product.img_id);
//                 // Remove the product document
//                 await Product.findByIdAndRemove(product._id);
//             }
//             // Delete associated categories
//             await Category.deleteMany({ store: user.store });
//             // Delete the associated store
//             const deletedStore = await Store.findByIdAndDelete(user.store);
//             await cloudinary.uploader.destroy(deletedStore.img);
//             await cloudinary.uploader.destroy(deletedStore.img_id);
//             if (!deletedStore) {
//                 return res.status(500).json({ success: false, message: 'Failed to delete associated store' });
//             }
//             // Delete associated products
//             await Product.deleteMany({ store: user.store });
//         }
//         // Perform the user deletion
//         const deletedUser = await User.findByIdAndDelete(userId);

//         if (!deletedUser) {
//             return res.status(500).json({ success: false, message: 'Failed to delete user' });
//         }

//         return res.status(200).json({ success: true, message: 'User and associated data deleted successfully' });
//     } catch (error) {
//         console.error(error);
//         return res.status(500).json({ success: false, message: 'Internal Server Error' });
//     }
// }

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserRoleById,
  updateProfileById,
};
