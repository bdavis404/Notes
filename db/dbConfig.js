const mongoose = require("mongoose");

function startDBConnection() {
  mongoose
    .set("useFindAndModify", false)
    .set("useNewUrlParser", true)
    .set("useUnifiedTopology", true)
    .connect("mongodb://localhost/Notes-App")
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
    entry: { type: String, required: true },
    title: String,
    topic: String,
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
