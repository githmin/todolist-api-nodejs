require("dotenv").config();
const jwt = require("jsonwebtoken");

exports.jwtAuthCookie = (req, res, next) => {
  const token = req.cookies.token;
  try {
    const user = jwt.verify(token, process.env.secret);
    req.user = user;
    next();
  } catch (e) {
    res.clearCookie("token");
    res.status(401).send({ error: "Unauthorized" });
  }
};
