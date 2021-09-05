const mongoose = require("mongoose");
const env = require("dotenv");
env.config();

const connectDB = () => {
  try {
    mongoose.connect(process.env.db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.log(err.message);
  }
};
module.exports = connectDB;
