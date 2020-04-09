//const model = require("./db/model");
//const notesSchema = require("./db/schema");
const dbConfig = require("./db/dbConfig");
const Note = dbConfig.Note;

function createNote(noteObj) {
  console.log("creating note");
  const note = new Note(noteObj);
  console.log("Note==", note);
}

// get all notes

// get note with specified title

module.exports.createNote = createNote;
