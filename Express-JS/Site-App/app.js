const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "template/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "template/about.html"));
});

app.get("/contact-me", (req, res) => {
  res.sendFile(path.join(__dirname, "template/contact-me.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "template/404.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
