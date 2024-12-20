const validator = require("validator");

const checkIsValidUser = (req, res, next) => {
    const { lastName, email, mobile, firstName, password } = req.body;
    if (!email || !lastName || !mobile || !firstName || !password) {
        return res.status(400).json({
            successful: false,
            message: `Missing inputs, firstName: ${firstName} lastName: ${lastName} email:${email} mobile:${mobile} password:${password}`,
        });
    }
    if (!validator.isEmail(email)) {
        return res.status(400).json({ successful: false, message: 'Email is not valid' });
    }
    if (!validator.isNumeric(mobile.toString()) || mobile.toString().length < 10) {
        return res.status(400).json({ successful: false, message: 'Number is not valid' });
    }

    if (!lastName || !firstName || typeof lastName !== 'string' || typeof firstName !== 'string') {
        return res.status(400).json({ successful: false, message: 'Full name is required and should be valid' });
    }
    if (password.length < 5) {
        return res.status(400).json({ successful: false, message: `Password min length is 5` });
    }
    req.userName = `${firstName} ${lastName}`;
    next();
};

const checkIsValidUpdate = (req, res, next) => {
    const { email, lastName, firstName, newPassword, area, state, city } = req.body;
    console.log(req.body)
    const mobile = parseInt(req.body.mobile);
    const pinCode = parseInt(req.body.pinCodeNumber);
    const streetNumber = parseInt(req.body.houseNo);
    if (newPassword && newPassword.length < 5) {
        return res.status(400).json({ successful: false, message: 'Password min length is 5' });
    }
    if (!validator.isEmail(email)) {
        return res.status(400).json({ successful: false, message: 'Email is not valid' });
    }

    if (!validator.isNumeric(mobile.toString()) || mobile.toString().length < 10) {
        return res.status(400).json({ successful: false, message: 'Number is not valid' });
    }

    if (!lastName || !firstName || typeof lastName !== 'string' || typeof firstName !== 'string') {
        return res.status(400).json({ successful: false, message: 'Full name is required and should be valid' });
    }
    if (!area || !state || !city || !streetNumber || typeof streetNumber !== 'number' || streetNumber.toString().length > 3 || !pinCode || typeof pinCode !== 'number' || pinCode.toString().length > 6) {
        return res.status(400).json({ successful: false, message: 'Full address is required and not valid' });
    }
    next();
};

module.exports = { checkIsValidUser, checkIsValidUpdate };
