const express = require("express");
require("dotenv").config();
const app = express();
const connectDB = require("./db");
const path = require("path");
connectDB();
const port = process.env.PORT || 5000;

app.use("/api/user", require("./routes/User"));
app.use("/api/user/expenses", require("./routes/Expense"));
// app.use("/api/user/login", require("./routes/userLogin"));
app.use("/api/user/resetpassword", require("./routes/resetPassword"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("expendo/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "expendo", "build", "index.html"));
  });
}

app.listen(port);
