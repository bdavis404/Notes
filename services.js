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

// get note with specified id
async function getNote(id) {
  const note = await Note.findById(id, (err, note) => {
    if (err) {
      console.error(err);
      return err;
    }
    return note;
  });

  return note;
}

// get Group Names

module.exports = {
  createNote: createNote,
  getNote: getNote,
  getNotes: getNotes,
};
