const express = require("express");
const app = express();
const connectDB = require("./db");
connectDB();
const port = process.env.PORT || 5000;
app.use("/api/user", require("./routes/User"));
app.use("/api/user/expenses", require("./routes/Expense"));
app.use("/api/user/login", require("./routes/userLogin"));
app.use("/api/user/resetpassword", require("./routes/resetPassword"));

app.listen(port, () => {
  console.log(`server is running in ${port}`);
});
