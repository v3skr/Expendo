const express = require("express");
const UserAuth = require("../middleware/UserAuth");
const Expense = require("../models/Expense");
const router = express.Router();
router.use(express.json());

router.get("/", UserAuth, async (req, res) => {
  try {
    const userid = req.id;
    const expenses = await Expense.find({ userid })
      .select("-userid")
      .select("-__v");
    res.send(expenses);
  } catch (err) {
    res.send(err.message);
  }
});

router.post("/", UserAuth, async (req, res) => {
  const { name, amount, date } = req.body;
  try {
    const expense = new Expense({
      name,
      amount,
      date,
      userid: req.id,
    });
    const newExpense = await expense.save();
    res.json({ msg: "Expense Added", type: "info", _id: newExpense._id });
  } catch (err) {
    console.log(err);
    res.json({ msg: err.message, type: "err" });
  }
});

router.delete("/", UserAuth, async (req, res) => {
  try {
    const id = req.header("_id");
    await Expense.findByIdAndDelete(id);
    res.json({ msg: "Expense Deleted", type: "war" });
  } catch (err) {
    res.send(err.message);
  }
});

router.put("/", UserAuth, async (req, res) => {
  try {
    const { expense, id } = req.body;
    await Expense.findByIdAndUpdate(id, expense);
    res.json({ msg: "Expense Updated", type: "info" });
  } catch (err) {
    res.json({ msg: err.message, type: "err" });
  }
});

module.exports = router;
