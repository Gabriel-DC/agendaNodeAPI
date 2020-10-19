const express = require("express");
const bodyParser = require("body-parser");
const consign = require("consign");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

consign().include("./src/controllers").into(app);

// 404 ERROR HANDLER
app.use((req, res, next) => {
  res.status(404).json({ message: "Not Found"});
});

module.exports = app;
