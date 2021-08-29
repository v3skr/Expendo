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
      .select("-__v")
      .select("-_id");
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
    await expense.save();
    res.json({ msg: "Expense Added", type: "info" });
  } catch (err) {
    console.log(err);
    res.json({ msg: err.message, type: "err" });
  }
});

module.exports = router;
