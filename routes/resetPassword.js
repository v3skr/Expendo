const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
router.use(express.json());
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const User = require("../models/User");
const validateToken = require("../middleware/validateToken");
require("dotenv").config();

//Post request to Send Password Reset Email containing Link
router.post("/", async (req, res) => {
  const { Email } = req.body;
  const user = await User.findOne({ Email }).select("-__v").select("-phone");
  if (!user) return res.json({ msg: "Emai Not Found", type: "err" });
  const payload = {
    id: user._id,
  };
  const token = jwt.sign(
    payload,
    process.env.PasswordResetSecret + user.password,
    { expiresIn: "10m" }
  );
  const link = `http://localhost:3000/api/user/resetpassword/${user._id}/${token}`;
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.Email,
      pass: process.env.Email_Password,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  let info = await transporter.sendMail({
    from: "mousavi.hesam1234@gmail.com",
    to: Email,
    subject: "Password Reset",
    html: `<div>
      <h1>Passwrord Reset</h1>
      <p>Reset Your Password : <a href = ${link}>Click Here To Change Password</a></p>
    </div>`,
  });
  nodemailer.getTestMessageUrl(info);
  res.json({
    msg: "Email Sent, Check Your Inbox For Instructions",
    type: "info",
  });
});

//Checks if link is valid
router.get("/:id/:token", async (req, res) => {
  const { id, token } = req.params;
  const isValid = mongoose.Types.ObjectId.isValid(id);
  if (!isValid) return res.json({ msg: "User Not Found", type: "err" });
  try {
    const user = await User.findById(id)
      .select("-Email")
      .select("-phone")
      .select("-__v");
    if (!user) return res.json({ msg: "Email Not Found", type: "err" });
    const result = validateToken(
      token,
      process.env.PasswordResetSecret + user.password
    );
    if (result !== true) return res.json({ msg: result, type: "err" });
  } catch (err) {
    return res.json({ msg: err.message, type: "err" });
  }
  res.json({ msg: true, type: "info" });
});

router.post("/:id/:token", async (req, res) => {
  const { password } = req.body;
  const { id, token } = req.params;
  try {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) return res.json({ msg: "Invalid Id", type: "err" });
    const user = await User.findById(id)
      .select("-phone")
      .select("-Email")
      .select("-__v");
    if (!user) return res.json({ msg: "User Not Found", type: "err" });
    const result = validateToken(
      token,
      process.env.PasswordResetSecret + user.password
    );
    if (result !== true) return res.json({ msg: result, type: "err" });
    const salt = await bcrypt.genSalt(10);
    const newPassword = await bcrypt.hash(password, salt);
    await User.findByIdAndUpdate(id, { password: newPassword });
    res.json({ msg: "Password Updated", type: "info" });
  } catch (err) {
    res.json({ msg: err.message, type: "err" });
  }
});
module.exports = router;
