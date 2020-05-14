const mongoose = require("mongoose");

function startDBConnection() {
  mongoose
    .connect("mongodb://localhost/Notes-App", { useUnifiedTopology: true })
    .then(() => {
      console.log("MongoDB connected....");
    })
    .catch((err) => {
      console.error("connection failute", err);
    });
}

function createNotesSchema() {
  console.log("creating notes schema");
  const notesSchema = new mongoose.Schema({
    groupName: String,
    title: String,
    entry: { type: String, required: true },
  });
  return notesSchema;
}

function getNoteModel() {
  return mongoose.model("Note", createNotesSchema());
}

module.exports = {
  Note: getNoteModel(),
  startDBConnection,
};
