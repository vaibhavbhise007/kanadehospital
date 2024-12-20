// Import the Cloudinary library
const cloudinary = require("cloudinary");

// Function to configure Cloudinary
const configureCloudinary = () => {
    try {
        // Configure Cloudinary with your credentials from environment variables
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_NAME,
            api_key: process.env.CLOUDINARY_KEY,
            api_secret: process.env.CLOUDINARY_SECRET,
        });
        console.log("Cloudinary configuration successful.");
    } catch (error) {
        console.error("Cloudinary configuration error:", error);
        // Handle the error as needed (e.g., exit the application)
        process.exit(1);
    }
};

// Call the function to configure Cloudinary
configureCloudinary();

// Export the configured Cloudinary instance
module.exports = { cloudinary };