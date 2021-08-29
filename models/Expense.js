const mongoose = require("mongoose");

const ExpenseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  userid: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Expense", ExpenseSchema, "Expenses");
