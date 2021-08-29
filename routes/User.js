const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
router.use(express.json());
const UserAuth = require("../middleware/UserAuth");

router.get("/", UserAuth, (req, res) => {});

router.post("/", async (req, res) => {
  try {
    const { Email, password, phone } = req.body.user;
    let user = await User.findOne({ Email });
    if (user) res.json({ msg: "Email Taken" });
    user = new User({
      Email,
      password,
      phone,
    });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();
    res.json({ msg: "user saved" });
  } catch (err) {
    res.json({ msg: err });
  }
});

module.exports = router;
