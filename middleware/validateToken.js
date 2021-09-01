const jwt = require("jsonwebtoken");
const validateToken = (token, secret) => {
  try {
    jwt.verify(token, secret);
    return true;
  } catch (err) {
    if (err) return err.message;
  }
};
module.exports = validateToken;
