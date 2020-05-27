const mongoose = require("mongoose");

const note = mongoose.model(
  "Note",
  new mongoose.Schema({
    entry: { type: String, required: true },
    title: String,
    topic: String,
  })
);
module.exports = note;
