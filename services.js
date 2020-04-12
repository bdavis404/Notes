const dbConfig = require("./db/dbConfig");
const Note = dbConfig.Note;

async function createNote(noteObj) {
  console.log("creating note");
  const note = new Note(noteObj);
  const result = await note.save();
  console.log("result (check mongo):", result);
  return result;
}

// get all notes
async function getNotes() {
  const notes = await Note.find((err, res) => {
    if (err) return err;
    return res;
  });
  return notes;
}

// get note with specified title
async function getNote(title) {}

module.exports = {
  createNote: createNote,
  getNotes: getNotes,
};
