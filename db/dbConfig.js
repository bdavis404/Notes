const mongoose = require("mongoose");

//let Note = undefined;

function startDBConnection() {
  mongoose
    .connect("mongodb://localhost/Notes-App", { useUnifiedTopology: true })
    .then(() => {
      console.log("MongoDB connected....");
    })
    .catch(err => {
      console.error("connection failute", err);
    });
}

function createNotesSchema() {
  console.log("creating notes schema");
  const notesSchema = new mongoose.Schema({
    groupName: String,
    title: String,
    entry: String
  });
  return notesSchema;
}

module.exports.startDBConnection = startDBConnection;
module.exports.Note = mongoose.model("Note", createNotesSchema()); // export Note model
