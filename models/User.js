const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  Email: {
    type: String,
    max: 255,
  },
  password: {
    type: String,
    min: 6,
    max: 255,
  },
  Email: {
    type: String,
    min: 11,
    max: 11,
  },
});
module.exports = mongoose.model("User", userSchema);
