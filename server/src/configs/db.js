const mongoose = require("mongoose");

async function connectToDatabase() {
  const connectionString = process.env.MONGODB_URI;

  const options = {
    serverSelectionTimeoutMS: 5000, // Time to wait for server selection
    socketTimeoutMS: 30000, // Socket timeout
    connectTimeoutMS: 30000, // Connection timeout
    maxPoolSize: 10, // Connection pool size
  };

  let retryCount = 0;
  const maxRetries = 5;
  const retryInterval = 5000; // Retry interval in milliseconds

  while (retryCount < maxRetries) {
    try {
      const conn = await mongoose.connect(connectionString, options);
      console.log(`Connected to MongoDB! Host: ${conn.connection.host}`);
      break; // Exit loop on successful connection
    } catch (error) {
      console.error(
        `Connection to MongoDB failed (attempt ${
          retryCount + 1
        }/${maxRetries}):`,
        error.message
      );

      retryCount++;
      if (retryCount === maxRetries) {
        console.error("Max retries reached. Exiting application.");
        process.exit(1); // Exit the process if retries fail
      }

      console.log(`Retrying connection in ${retryInterval / 1000} seconds...`);
      await new Promise((resolve) => setTimeout(resolve, retryInterval)); // Wait before retrying
    }
  }
}

module.exports = connectToDatabase;
