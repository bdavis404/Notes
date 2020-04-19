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
  return findNoteById(id)
    .then((note) => {
      return note;
    })
    .catch((reason) => {
      console.log("ERROR!!", reason);
    });
}

async function updateNoteObj(id, newnoteObj) {
  return findNoteById(id)
    .then((note) => {
      if (note) {
        note.groupName = newnoteObj.groupName;
        note.title = newnoteObj.title;
        note.entry = newnoteObj.entry;
        return note.save();
      } else {
        return null;
      }
    })
    .catch((reason) => {
      console.log("### ERROR ###", reason);
      return reason;
    });
}

async function findNoteById(id) {
  return await Note.findById(id, (err, note) => {
    if (err) {
      console.log("### ERROR in findNoteById ###", err);
      return err;
    }
    console.log("FOUND! =", note);
    return note;
  });
}

// get Group Names

module.exports = {
  createNote: createNote,
  getNote: getNote,
  getNotes: getNotes,
  updateNote: updateNoteObj,
};
