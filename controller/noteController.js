const express = require("express");
const router = express.Router();
const todoNote = require("../model/todoNote");

router.post("/", async (req, res) => {
  const newNote = new todoNote({
    note: req.body.note,
  });
  await newNote
    .save()
    .then(
      res.send({
        status: 200,
        params: "Save Successfull",
      })
    )
    .catch((e) => {
      res.send({
        status: 400,
        params: "Save Unsuccesfull",
      });
      console.log(e);
    });
});

router.delete("/", async (req, res) => {
  await todoNote
    .findByIdAndDelete(req.body.id)
    .then(
      res.send({
        status: 200,
        params: "Delete Successfull",
      })
    )
    .catch((e) => {
      res.send({
        status: 400,
        params: "Save Unsuccesfull",
      });
      console.log(e);
    });
});

router.put("/", async (req, res) => {
  await todoNote
    .findByIdAndUpdate(req.body.id, { note: req.body.note })
    .then(
      res.send({
        status: 200,
        params: "Save Successfull",
      })
    )
    .catch((e) => {
      res.send({
        status: 400,
        params: "Save Unsuccesfull",
      });
      console.log(e);
    });
});

module.exports = router;
