const mongoose = require("mongoose");

function startDBConnection() {
  mongoose
    .connect("mongodb://localhost/Notes-App", { useUnifiedTopology: true })
    .then(() => {
      console.log("MongoDB connected....");
      const notesSchema = createNotesSchema();
      const Note = mongoose.model("Note", notesSchema);
    })

    .catch(err => {
      console.error("connection failute", err);
    });
}

function createNotesSchema() {
  const notesSchema = new mongoose.Schema({
    groupName: String,
    title: String,
    notes: String
  });
  return notesSchema;
}

module.exports.startDBConnection = startDBConnection;
module.exports.Note = this.Note;
