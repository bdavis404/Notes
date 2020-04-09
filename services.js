const dbConfig = require("./db/dbConfig");
const Note = dbConfig.Note;

async function createNote(noteObj) {
  console.log("creating note");
  const note = new Note(noteObj);
  const result = await note.save();
  console.log("result (check mongo):", result);
}

// get all notes

// get note with specified title

module.exports.createNote = createNote;
