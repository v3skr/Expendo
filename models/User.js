const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  Email: {
    type: String,
    max: 255,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 255,
  },
  phone: {
    type: String,
    required: true,
    min: 11,
    max: 11,
  },
});
module.exports = mongoose.model("User", userSchema, "users");
