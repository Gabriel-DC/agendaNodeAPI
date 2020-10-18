const express = require("express");
const consign = require("consign");

const app = express();

consign().include("./src/controllers").into(app);


module.exports = app;
