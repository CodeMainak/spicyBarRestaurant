const path = require("path");
const express = require("express");
const app = express();
const PORT = process.env.port || 8000;

const filePath = path.join();
console.log(__dirname);
app.use(express.static(filePath));
app.get("/", (req, res) => {
  res.send("Welcome to HomePage");
});
app.listen(PORT, () => {
  console.log("Server is running.");
});
