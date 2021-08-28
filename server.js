const express = require("express");
const app = express();
const connectDB = require("./db");
connectDB();
const port = process.env.PORT || 5000;
app.use("/api/login", require("./routes/UserLogin"));
app.use("/api/register", require("./routes/UserRegister"));

app.listen(port, () => {
  console.log(`server is running in ${port}`);
});
