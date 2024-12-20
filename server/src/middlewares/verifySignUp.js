const { User } = require("../models/user.model");
const { Role } = require("../models/roles.model");
const TemporalUser = require("../models/temporalUser.model");

const checkDuplicatedEmail = async (req, res, next) => {
    try {
        // Check if the email exists in the User collection
        const userEmail = await User.findOne({ email: req.body.email });
        if (userEmail)
            return res.status(400).json({ message: "The email already exists" });

        // Check if the Mobile exists in the User collection
        const userMobile = await User.findOne({ mobile: req.body.mobile });
        if (userMobile)
            return res.status(400).json({ message: "The mobile number already exists" });
        // Check if the mobile exists in the TemporalUser collection
        const tempMobile = await TemporalUser.findOne({ mobile: req.body.mobile });
        if (tempMobile)
            return res.status(400).json({ message: "The mobile number already exists" });

        // Check if the email exists in the TemporalUser collection
        const tempEmail = await TemporalUser.findOne({ email: req.body.email });
        if (tempEmail)
            return res.status(302).json({
                successful: false,
                message: "Email unverified",
                redirect: `/#/authentication/confirmation`,
                id: tempEmail._id,
            });


        // Proceed to the next middleware/handler
        next();
    } catch (error) {
        // Handle errors and return a 500 response if something goes wrong
        res.status(500).json({ success: false, message: "Something went wrong, signup failed" });
    }
};


const checkRolesExisted = (req, res, next) => {
    if (req.body.roles) {
        for (let i = 0; i < req.body.roles.length; i++) {
            if (!ROLES.includes(req.body.roles[i])) {
                return res.status(400).json({
                    message: `Role ${req.body.roles[i]} does not exist`,
                });
            }
        }
    }
    next();
};

module.exports = { checkDuplicatedEmail, checkRolesExisted };
