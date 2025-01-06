const router = require("express").Router();

const {
  login,
  signUp,
  validateEmailToken,
  sendConfirmationEmail,
  sendResetPasswordEmail,
  resetPassword,
  logout,
  getSession,
} = require("../controllers/auth.controller");

// Import middleware to check for duplicated email during sign-up
const { checkDuplicatedEmail } = require("../middlewares/verifySignUp");

// Import middleware to check the validity of user data during sign-up
const { checkIsValidUser } = require("../middlewares/userValidator");

router.post("/signup", [checkDuplicatedEmail, checkIsValidUser], signUp); // Sign-up route
router.get("/verification/:token", validateEmailToken); // Email verification route

router.post("/login", login); // Login route

router.get("/session", getSession); // Get session information route

router.post("/forgotPassword", sendResetPasswordEmail); // Forgot password route

router.post("/resetPassword/:token", resetPassword); // Reset password route

router.post("/confirmation", sendConfirmationEmail); // Send confirmation email route

router.get("/logout", logout); // Logout route

module.exports = router;
