const path = require("path");
const express = require("express");
const app = express();

const filePath = path.join();
console.log(__dirname);
app.use(express.static(filePath));
app.get("/", (req, res) => {
  res.send("Welcome to HomePage");
});
app.listen(8000, () => {
  console.log("Server is running.");
});
