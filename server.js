const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <h1>Version 1: Hello from GitHub Actions 🚀</h1>
    <p>This Node.js app is deployed on AWS EC2 without Docker.</p>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});