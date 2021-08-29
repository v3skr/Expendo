const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());

app.post("/", async (req, res) => {
  try {
    const { Email, password } = req.body;
    let user = await User.findOne({ Email, type: "err" })
      .select("-__v")
      .select("-Email")
      .select("-phone");
    if (!user) return res.json({ msg: "Email Not Found", type: "err" });
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return res.json({ msg: "Passowrd Incorrect", type: "err" });
    const payload = {
      id: user._id,
    };
    jwt.sign(payload, process.env.jwtKey, { expiresIn: 3600 }, (err, token) => {
      if (err) return res.json({ msg: err.message, type: "err" });
      res.json({ msg: "Successfully Logged in", token, type: "info" });
    });
  } catch (err) {
    res.json({ msg: err.message, type: "err" });
  }
});

module.exports = app;
