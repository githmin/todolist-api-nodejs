const jwt = require("jsonwebtoken");
const express = require("express");

const router = express.Router();

// Hardcoded until db fetch implimentation
const getUser = async (username) => {
  return { userId: 123, password: "hai", username };
};

router.post("/", async (req, res) => {
  const { username, password } = req.body;
  const user = await getUser(username);
  console.log(username, password, user);
  if (user.password !== password) {
    return res.status(403).json({
      error: "Invalid Login",
    });
  }

  delete user.password;

  const token = jwt.sign(user, process.env.secret, { expiresIn: "1h" });
  console.log("passed");
  res.cookie("token", token);
  res.send("Authorized");
});

module.exports = router;
