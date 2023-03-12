const jwt = require("jsonwebtoken");
const express = require("express");

const user = require("../model/user");
const router = express.Router();

// Register a new User
router.post("/register", async (req, res) => {
  const newUser = new user({
    email: req.body.email,
    password: req.body.password,
  });

  try {
    await newUser.save();
    res.sendStatus(200);
  } catch (e) {
    res.send({ status: 400, error: e });
  }
});

// Login using email and password
router.post("/", async (req, res) => {
  const { email, password } = req.body;
  const userObj = await user.findOne({ email: email });
  if (userObj.password !== password) {
    return res.status(403).json({
      error: "Invalid Login",
    });
  }

  delete user.password;

  const token = await jwt.sign({ userObj }, process.env.secret, {
    expiresIn: "1h",
  });
  res.cookie("token", token);
  res.send("Authorized");
});

module.exports = router;
