const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());

app.post("/", async (req, res) => {
  try {
    const { Email, password } = req.body.user;
    let user = await User.findOne({ Email });
    if (!user) return res.send("Email Not Found");
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return res.send("Passowrd Incorrect");
    const payload = {
      id: user._id,
    };
    jwt.sign(payload, process.env.jwtKey, { expiresIn: 3600 }, (err, token) => {
      res.send(token);
    });
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = app;
