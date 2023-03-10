import mongoose from "mongoose";
const Schema = mongoose.Schema();

const todoNote = new Schema({
  note: String,
  isChecked: false,
  date: { type: date, default: Date.now },
});
