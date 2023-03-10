require("dotenv").config();
const port = process.env.port || 4000;
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const noteController = require("./controller/noteController");

const mongoose = require("mongoose");

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

app.use("/api/v1", noteController);

app.listen(port, () => {
  console.log(`App running on port ${port} ✔️`);
});
