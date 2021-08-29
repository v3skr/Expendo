const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());

app.get("/", (req, res, next) => {
  const token = req.header("token");
  try {
    const result = jwt.verify(token, process.env.jwtKey);
    req.id = result.id;
    next();
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = app;
