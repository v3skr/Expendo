const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
router.use(express.json());
const mongoose = require("mongoose");
const UserAuth = require("../middleware/UserAuth");

router.get("/", UserAuth, async (req, res) => {
  const id = req.id;
  try {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) return res.json({ msg: "User Not Found", type: "err" });
    const user = await User.findById(id)
      .select("-__v")
      .select("-password")
      .select("-_id");
    if (!user) return res.json({ msg: "User Not Found", type: "err" });
    res.json({ msg: user, type: "info" });
  } catch (err) {
    res.json({ msg: er.message, type: "info" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { Email, password, phone } = req.body;
    let user = await User.findOne({ Email });
    if (user) return res.json({ msg: "Email Taken" });
    user = new User({
      Email,
      password,
      phone,
    });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();
    res.json({ msg: "User Saved", type: "info" });
  } catch (err) {
    res.json({ msg: err, type: "err" });
  }
});

router.put("/", UserAuth, async (req, res) => {
  try {
    const { user, newUser } = req.body;
    if (user.Email !== newUser.Email) {
      const Email = await User.findOne({ Email: newUser.Email });
      if (Email) return res.json({ msg: "Email Taken", type: "war" });
    }
    if (newUser.isPasswordChange) {
      const salt = await bcrypt.genSalt(10);
      const newPassword = await bcrypt.hash(newUser.password2, salt);
      newUser.password = newPassword;
    }
    !newUser.isPasswordChange && delete newUser.password;
    delete newUser.password2;
    delete newUser.isPasswordChange;
    delete newUser.isEdit;
    await User.findByIdAndUpdate(req.id, newUser);
    res.json({ msg: "Account Details Updated", type: "info" });
  } catch (err) {
    res.json({ msg: err.message, type: "err" });
  }
});

module.exports = router;
