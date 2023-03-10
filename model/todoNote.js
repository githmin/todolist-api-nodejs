const mongoose = require("mongoose");

const todoNote = new mongoose.Schema({
  note: { type: String, required: true },
  isChecked: {
    type: Boolean,
    default: false,
  },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("todoNote", todoNote);
