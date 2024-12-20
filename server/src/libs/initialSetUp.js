const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: ".env" });
const { User } = require("../models/user.model");
const { Role } = require("../models/roles.model");

const createRoles = async () => {
  try {
    const count = await Role.estimatedDocumentCount({ timeout: 30000 }); // Increase the timeout to 30 seconds
    if (count > 0) return;

    const rolesToCreate = ["user", "moderator", "admin", "customer"].map(
      (name) => ({ name })
    );
    const createdRoles = await Role.create(rolesToCreate);

    // console.log("Roles Created!");
  } catch (err) {
    console.error("Error creating roles:", err);
  }
};

const createUserIfNotExists = async (userData) => {
  try {
    const user = await User.findOne({ email: userData.email });

    if (user) {
      // console.log(`User with email ${userData.email} already exists. Skipping creation.`);
      return; // Exit if the user already exists
    }

    // Find roles or create if they don't exist
    let roles = await Role.find({ name: userData.roles });
    if (roles.length === 0) {
      const newRole = await Role.create({ name: userData.roles });
      roles = [newRole]; // Add the newly created role
      // console.log(`Role ${userData.roles} created.`);
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    // Generate email confirmation token
    const token = jwt.sign(
      { id: userData.email },
      process.env.JWT_EMAIL_CONFIRMATION_KEY
    );

    // Create the user
    const newUser = await User.create({
      ...userData,
      password: hashedPassword,
      emailToken: token,
      roles: roles.map((role) => role.id),
    });

    // console.log(`User ${newUser.name} created with role(s): ${userData.roles}`);
  } catch (err) {
    console.error(`Error creating user ${userData.name}:`, err.message);
  }
};

const createAdmin = async () => {
  try {
    const adminData = {
      name: "admin",
      email: "admin@localhost.com",
      roles: "admin",
      mobile: "1945514235",
      password: "admin123", // Change this to a secure password.
    };

    await createUserIfNotExists(adminData);
  } catch (err) {
    console.error("Error creating admin user:", err);
  }
};

const createModerator = async () => {
  try {
    const moderatorData = {
      name: "moderator",
      email: "moderator@localhost.com",
      roles: "moderator",
      mobile: "1945514238",
      password: "moderator123", // Change this to a secure password.
    };
    await createUserIfNotExists(moderatorData);
  } catch (err) {
    console.error("Error creating moderator user:", err);
  }
};

const createCustomer = async () => {
  try {
    const customerData = {
      name: "customer",
      email: "customer@localhost.com",
      roles: "customer",
      mobile: "1945514239",
      password: "customer123", // Change this to a secure password.
    };

    await createUserIfNotExists(customerData);
  } catch (err) {
    console.error("Error creating customer user:", err);
  }
};

const createUser = async () => {
  try {
    const userData = {
      name: "user",
      email: "user@localhost.com",
      roles: "user",
      mobile: "1945514399",
      password: "user123", // Change this to a secure password.
    };
    await createUserIfNotExists(userData);
  } catch (err) {
    console.error("Error creating user:", err);
  }
};

// Create all users
const createAllUsers = async () => {
  await createAdmin();
  await createModerator();
  await createCustomer();
  await createUser();
};
module.exports = {
  createRoles,
  createAllUsers,
};
