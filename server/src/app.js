const express = require("express");
const app = express();

const cors = require("cors");

const path = require("path");

const morgan = require("morgan");

const cookieParser = require("cookie-parser");

require("dotenv").config({ path: ".env" });

// Importing and using various routes
const authRouter = require("./routers/auth.routes.js");
const usersRouter = require("./routers/users.routes.js");

const appointmentRouter = require("./routers/appointmentRoutes.js");
const blogRouter = require("./routers/blogRoutes.js");
const employeeRouter = require("./routers/employeeRoutes.js");

// Middleware for parsing URL-encoded and JSON request bodies
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

// Middleware for parsing cookies
app.use(cookieParser());

// Enable CORS for all origins in development mode
// Configure CORS middleware to allow access from all origins
if (process.env.NODE_ENV === "development") {
  app.use(
    cors({
      exposedHeaders: ["Cookie", "Authorization"], // Expose specific headers
      credentials: true, // Allow credentials (e.g., cookies)
      origin: process.env.ACCESS_CONTROL_ALLOW_ORIGIN, // Allow access from all origins
    })
  );
}

// HTTP request logger middleware (Morgan) with "tiny" format
app.use(morgan("tiny"));

// Serve static files from the "media" directory
app.use("/media", express.static(path.join(__dirname, "storage", "upload")));

// Serve frontend build in production mode
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/client", "build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/client", "build", "index.html"));
  });
} else {
  // Serve frontend in development mode
  app.use(express.static(path.join(__dirname, "/client")));
}

// Define routes with tags
app.use("/api/auth", authRouter);
app.use("/api/users", usersRouter);

app.use("/api/appointments", appointmentRouter);
app.use("/api/employees", employeeRouter);
app.use("/api/blog", blogRouter);


module.exports = app;

