const { User } = require("../models/user.model");
const TemporalUser = require("../models/temporalUser.model");
const { Role } = require("../models/roles.model");
require("dotenv").config({ path: ".env" });
const jwt = require('jsonwebtoken'); // Import the jwt library
const bcrypt = require("bcryptjs");

const sendConfirmationEmailFunction = require("../libs/sendConfirmationEmail");
const sendResetPasswordEmailFunction = require("../libs/sendResetPasswordEmail");
const { getCookieValueByName } = require("../utils/getCookieValueByName");



// Signup function for user registration
async function signUp(req, res) {
    try {
        const { email, firstName, lastName, mobile, password, roles } = req.body;

        let userEmail = await User.findOne({ email: email });
        if (userEmail) {
            return res.status(409).json({
                successful: false,
                message: "Email already exists.",
            });
        }
        let userMobile = await User.findOne({ mobile: mobile });
        if (userMobile) {
            return res.status(409).json({
                successful: false,
                message: "Mobile number already exists.",
            });
        }

        // Input validation
        if (!firstName || !lastName || !email || !mobile || !password) {
            return res.status(400).json({
                successful: false,
                message: "First Name, Last Name, Email, mobile, and password are required.",
            });
        }

        // Check if the user already exists
        let temporalUser = await TemporalUser.findOne({ email });
        if (temporalUser) {
            return res.status(409).json({
                successful: false,
                message: "Please check your email to confirm. ",
            });
        }

        if (!temporalUser) {
            temporalUser = new TemporalUser({
                name: req.body.userName || `${firstName} ${lastName}`,
                email,
                password,
                mobile,
            });
        }

        // Assign roles
        if (roles && roles.length) {
            const foundRoles = await Role.find({ name: { $in: roles } });
            if (!foundRoles.length) {
                return res.status(400).json({
                    successful: false,
                    message: "Invalid roles provided.",
                });
            }
            temporalUser.roles = foundRoles.map((role) => role._id);
        } else {
            const defaultRole = await Role.findOne({ name: "doctor" });
            temporalUser.roles = [defaultRole._id];
        }

        // Generate email confirmation token
        const token = jwt.sign(
            { id: temporalUser.id },
            process.env.JWT_EMAIL_CONFIRMATION_KEY,
            { expiresIn: "1h" } // Token expires in 1 hour
        );
        temporalUser.emailToken = token;

        // Generate confirmation URL
        const url = `${process.env.HOST || "http://localhost:3000"}/authentication/confirmation/:${token}`;
        // Send confirmation email
        await sendConfirmationEmailFunction(url, email);
        // Save the user
        await temporalUser.save();

        return res.status(201).json({
            successful: true,
            message: "User created successfully. Please check your email to confirm.",
            email: temporalUser.email,
        });
    } catch (error) {
        console.error("Sign-up error:", error);

        return res.status(500).json({
            successful: false,
            message: "Something went wrong during sign-up.",
        });
    }
};


// Send a confirmation email to the user
async function sendConfirmationEmail(req, res) {
    try {
        const userFound = await User.findOne({ email: req.body.email });

        const token = userFound.emailToken;

        // Construct the confirmation URL
        const url = `${process.env.HOST || "localhost:7000"
            }/api/auth/verification/${token}`;

        // Send the confirmation email
        await sendConfirmationEmailFunction(url, userFound.email);

        // Respond with success message
        return res.status(200).json({
            success: true,
            message: "Account confirmation email has been sent successfully",
        });
    } catch (error) {
        console.log(error);

        // Respond with an error message
        return res.status(500).json({ message: "something went wrong" });
    }
};


// Get user session information
async function getSession(req, res) {
    try {
        const cookieToken = getCookieValueByName(req.cookies, process.env.SESSION_TOKEN);

        if (!cookieToken)
            return res
                .status(404)
                .json({ successful: false, message: "No session token was found" });

        // Check if the session token is valid
        const decoded = jwt.verify(cookieToken, process.env.JWT_SECRET_KEY);
        const user = await User.findById(decoded.id, { password: 0 }).populate(
            "roles"
        );

        if (!user) return res.status(404).json({ message: "No user found" });

        // Respond with user information and token
        return res.status(200).json({ successful: true, user, token: cookieToken });
    } catch (error) {
        console.log(error);

        // Respond with an error message
        return res.status(401).json({ successful: false, message: "Unauthorized" });
    }
};

// Validate the email confirmation token and create a user
async function validateEmailToken(req, res) {
    const token = req.params.token?.replace(/^:/, ""); // Ensure token is extracted properly

    if (!token) {
        // console.log("No token provided:", req.params.token);
        return res.status(400).json({ error: "Token is missing." });
    }

    try {
        // console.log("Token received:", token);

        // Verify JWT
        const decoded = jwt.verify(token, process.env.JWT_EMAIL_CONFIRMATION_KEY);

        const { id } = decoded;

        // Fetch the temporal user by ID
        const tempUser = await TemporalUser.findById(id);

        if (!tempUser) {
            // console.error(`User with ID ${id} not found in TemporalUser collection.`);
            return res.status(404).json({ error: "Temporary user not found." });
        }

        // Create a new user from the temporal user's data
        const newUser = new User({
            name: tempUser.name,
            email: tempUser.email,
            mobile: tempUser.mobile,
            password: await User.encryptPassword(tempUser.password), // Use the token's password
            roles: tempUser.roles,
        });

        // Save the new user to the database
        await newUser.save();
        // Remove the temporary user from the database
        await TemporalUser.findByIdAndDelete(tempUser._id);
        // Redirect to the login page
        return res.status(201).json({
            successful: true,
            message: "User created successfully. Please check your email to confirm.",
            redirect: `/login`,
        });

    } catch (err) {
        // console.error("JWT verification error:", err.message);
        return res.status(401).json({ success: false, message: "Invalid or expired token." });
    }
}


// User login function
async function login(req, res) {
    try {
        // Check if the user already exists
        let temporalUser = await TemporalUser.findOne({ email: req.body.email });
        if (temporalUser) {
            return res.status(409).json({
                successful: true,
                message: "Please check your email to confirm. ",
            });
        }
        const userFound = await User.findOne({ email: req.body.email }).populate(
            "roles"
        );

        if (!userFound) return res.status(400).json({ message: "User Not Found" });

        // Check if the provided password matches the stored password
        const matchPassword = await User.comparePassword(
            req.body.password,
            userFound.password
        );

        if (!matchPassword)
            return res.status(401).json({
                token: null,
                message: "Invalid Password",
            });

        const oneDayInSeconds = 86400;

        // Generate a JWT token for the user's session
        const token = jwt.sign({ id: userFound._id }, process.env.JWT_SECRET_KEY, {
            expiresIn: oneDayInSeconds,
        });

        // Set the token as a cookie
        res.cookie(process.env.SESSION_TOKEN, token, {
            expire: oneDayInSeconds + Date.now(),
        });

        // Respond with user information, roles, and token
        return res
            .status(200)
            .json({ token: token, roles: userFound.roles, user: userFound });
    } catch (error) {
        console.log(error);

        // Respond with an error message
        return res.status(500).json({ message: error });
    }
};

// User logout function
async function logout(req, res) {
    try {
        // Clear the session token cookie
        res.clearCookie(process.env.SESSION_TOKEN);
        // Respond with a success message
        return res
            .status(200)
            .json({ successfully: true, message: "User has logged out successfully" });
    } catch (error) {
        console.log(error);
        // Respond with an error message
        return res.status(500).json({ message: error });
    }
};

// Send a reset password email to the user
async function sendResetPasswordEmail(
    req,
    res
) {
    try {
        const userFound = await User.findOne({ email: req.body.email });

        if (!userFound)
            return res.status(422).json({
                successful: false,
                message: "No account linked with that email",
            });

        const id = userFound._id;

        // Generate a reset password token
        const token = jwt.sign(
            {
                id,
                expiration: Date.now() + 10 * 60 * 1000,
            },
            process.env.JWT_RESET_FORGOTTEN_PASSWORD_KEY
        );

        // Construct the reset password URL
        const url = `${process.env.HOST || "localhost:3000"
            }/authentication/resetPassword/${token}`;

        // Send the reset password email
        await sendResetPasswordEmailFunction(url, req.body.email);

        // Respond with a success message
        return res.status(200).json({
            success: true,
            message: "Reset password email has been sent successfully",
        });
    } catch (err) {
        console.log(err);

        // Respond with an error message
        return res.status(500).json({
            successful: false,
            message: "Something went wrong, failed to send reset password email",
        });
    }
};

// Reset the user's password
async function resetPassword(req, res) {
    
    try {
        const { newPassword, confirmPassword } = req.body;
        // const token = req.params.token;
        const token = req.params.token?.replace(/^:/, ""); // Ensure token is extracted properly

        if (!token) { return res.status(403).json({ success: false, message: "No token provided" }); }

        // Verify the token using the correct secret key
        const decoded = jwt.verify(token, process.env.JWT_RESET_FORGOTTEN_PASSWORD_KEY);

        // Check if the token is valid
        if (!decoded) return res.status(401).json({ message: "Invalid token" });

        // Check the token expiration
        if (Date.now() > decoded.expiration)
            return res.status(422).json({ successful: false, message: "Time to reset password exceeded", });

        const id = decoded.id;

        // Check if the user exists
        const userFound = await User.findById(id);

        if (!userFound)
            return res.status(404).json({ message: "User not found" });

        // Check password match and length
        if (newPassword !== confirmPassword)
            return res.status(400).json({ successful: false, message: "Passwords don't match" });

        if (newPassword.length < 5)
            return res.status(400).json({ successful: false, message: "Passwords min length is 5" });

        // Encrypt and update the user's password
        const encodedPassword = await User.encryptPassword(newPassword);
        userFound.password = encodedPassword;
        await userFound.save();

        // Respond with a success message
        return res.status(200).json({ success: true, message: "Password updated successfully" });
    } catch (err) {
        console.error(err); // Log the error
        // Respond with an error message
        return res.status(500).json({
            successful: false,
            message: "Something went wrong, failed to update password",
        });
    }
}

module.exports = {
    signUp,//com
    login,//com

    sendConfirmationEmail,//panding
    validateEmailToken,//com

    sendResetPasswordEmail,//com
    resetPassword,//com

    getSession,//psnding
    logout,//com
};