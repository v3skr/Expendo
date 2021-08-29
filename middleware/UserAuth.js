const jwt = require("jsonwebtoken");

const UserAuth = (req, res, next) => {
  const token = req.header("token");
  if (!token) return res.json({ msg: "Access Denied", type: "err" });
  try {
    const result = jwt.verify(token, process.env.jwtKey);
    req.id = result.id;
    next();
  } catch (err) {
    res.send(err.message);
  }
};

module.exports = UserAuth;
