const dbConfig = require("./db/dbConfig");
const Note = dbConfig.Note;

async function createNote(noteObj) {
  return new Note(noteObj).save();
}

// get all notes
async function getNotes() {
  return await Note.find().then((note) => {
    return note;
  });
}

// get note with specified id
async function getNote(id) {
  return await Note.findOne({ _id: id }).then((note) => {
    return note;
  });
}

async function updateNote(id, newnoteObj) {
  return await Note.findByIdAndUpdate(
    { _id: id },
    {
      $set: {
        groupName: newnoteObj.groupName,
        title: newnoteObj.title,
        entry: newnoteObj.entry,
      },
    },
    { new: true }
  );
}

// async function deleteNote(id) {
//   Note.deleteOne()

// }

// get Group Names

module.exports = {
  createNote: createNote,
  getNote: getNote,
  getNotes: getNotes,
  updateNote: updateNote,
};
