const express = require("express");
const router = express.Router();
const User = require("../models/User");
router.use(express.json());
const bcrypt = require("bcryptjs");

router.post("/", async (req, res) => {
  try {
    const { Email, password, phone } = req.body;
    let user = await User.findOne({ Email });
    if (user) res.send("Email Taken");
    user = new User({
      Email,
      password,
      phone,
    });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();
    res.send("user saved");
  } catch (err) {
    console.log(err.message);
    res.send(err.message);
  }
});

module.exports = router;
