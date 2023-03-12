require("dotenv").config();
const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
var cors = require("cors");

const mongoose = require("mongoose");
const port = process.env.port || 4000;

const { jwtAuthCookie } = require("./middleware/jwtAuthCookie");
const noteController = require("./controller/noteController");
const login = require("./controller/login");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use(cookieParser());

// DB connection to MongoDB | Set "dbUrl" in .env file
mongoose
  .connect(process.env.dbUrl)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

// Routes of the app
app.use("/api/v1/login", login);
app.use("/api/v1", jwtAuthCookie, noteController);

// Set port on .env file or else default port will be 4000
app.listen(port, () => {
  console.log(`App running on port ${port} ✔️`);
});
