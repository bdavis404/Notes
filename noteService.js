const dbConfig = require("./db/dbConfig");
const Note = dbConfig.Note;

async function createNote(noteObj) {
  return new Note(noteObj).save().catch((reason) => {
    return reason.message;
  });
}

async function deleteNote(id) {
  return await Note.findOneAndRemove({ _id: id }).then((result) => {
    return result;
  });
}

async function getNote(id) {
  return await Note.findOne({ _id: id }).then((note) => {
    return note;
  });
}

async function getNotes() {
  return await Note.find().then((note) => {
    return note;
  });
}

async function updateNote(id, newnoteObj) {
  console.log(newnoteObj);
  try {
    return await Note.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          groupName: newnoteObj.groupName,
          title: newnoteObj.title,
          entry: newnoteObj.entry,
          topic: newnoteObj.topic ? newnoteObj.topic : null,
        },
      },
      { new: true }
    );
  } catch (error) {
    return error;
  }
}

module.exports = {
  createNote: createNote,
  deleteNote: deleteNote,
  getNote: getNote,
  getNotes: getNotes,
  updateNote: updateNote,
};
