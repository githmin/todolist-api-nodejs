require("dotenv").config();
const port = process.env.port || 4000;
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

var cors = require("cors");

app.use(cors());
app.use(cookieParser());

const noteController = require("./controller/noteController");

const mongoose = require("mongoose");
const login = require("./controller/login");
const { jwtAuthCookie } = require("./middleware/jwtAuthCookie");

mongoose
  .connect(process.env.dbUrl)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/api/v1/login", login);
app.use("/api/v1", jwtAuthCookie, noteController);

app.listen(port, () => {
  console.log(`App running on port ${port} ✔️`);
});
