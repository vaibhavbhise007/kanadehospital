// Load environment variables from .env file
require("dotenv").config({ path: ".env" });

// Import required modules
const app = require("./src/app");
const connectToDatabase = require("./src/configs/db");
const { connectIO } = require("./src/configs/io");

// Import node-cron and schedule a task:

var cron = require("node-cron");

// Create an HTTP server using the app
const http = require("http").createServer(app);

// Import functions for initial setup
const { createRoles, createAllUsers } = require("./src/libs/initialSetUp");

// Connect to the database
connectToDatabase();

// Perform initial setup tasks
createRoles();
createAllUsers();

// Connect Socket.IO to the HTTP server
connectIO(http);

// Define the port for the server to listen on
const port = process.env.PORT || 8000;

// Schedules given task to be executed whenever the cron expression ticks.
cron.schedule("* * * * *", () => {
  console.log("running a task every minute");
});

// Start the server and listen on the defined port
http.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
