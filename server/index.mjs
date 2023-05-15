import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import "express-async-errors";
import posts from "./routes/posts.mjs";

const PORT = process.env.PORT || 5050;
const app = express();

// Allow all origins to access the API
app.use(cors());

// Set specific CORS headers if needed
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200"); // Set the allowed origin
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); // Set the allowed HTTP methods
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization"); // Set the allowed headers
  res.setHeader("Access-Control-Allow-Credentials", "true"); // Set the credentials flag to true
  next();
});

app.use(express.json());

// Load the /posts routes
app.use("/games", posts);

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Uh oh! An unexpected error occurred.");
});

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
