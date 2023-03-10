require("dotenv").config();
const port = process.env.port || 4000;
const express = require("express");
const app = express();








app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`App running on port ${port} ✔️`);
});

