const ObjectId = require('mongoose').Types.ObjectId;

// Middleware to check if a given ID is a valid MongoDB ObjectId
const checkIsValidId = (req, res, next) => {
    const isValid = ObjectId.isValid(req.params.id.replace(/^:/, ""));
    if (!isValid) {
        return res.status(404).json({ successful: false, message: 'Not found, invalid id' });
    }

    next(); // Proceed to the next middleware
};

module.exports = checkIsValidId;