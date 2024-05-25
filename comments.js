// Create web server
const express = require("express");
const app = express();
const port = 3000;

// Middleware
app.use(express.static("public"));
app.use(express.json());

// Comments
const comments = [
  { username: "Alice", comment: "Hello!" },
  { username: "Bob", comment: "Hi!" },
  { username: "Charlie", comment: "Hey there!" },
];

// GET /comments
app.get("/comments", (req, res) => {
  res.json(comments);
});

// POST /comments
app.post("/comments", (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.status(201).json(comment);
});

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});