// server.js
const express = require("express");
const app = express();
const path = require("path");

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, "build")));

// Define route to serve the index.html file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
