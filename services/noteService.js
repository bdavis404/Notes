const dbConfig = require("../db/dbConfig");
const Note = dbConfig.Note;

async function createNote(noteObj) {
  try {
    return await new Note(noteObj).save();
  } catch (error) {
    return error;
  }
}

async function deleteNote(id) {
  try {
    return await Note.findOneAndRemove({ _id: id });
  } catch (error) {
    return error;
  }
}

async function getNote(id) {
  try {
    return await Note.findOne({ _id: id });
  } catch (error) {
    return error;
  }
}

async function getNotes() {
  try {
    return await Note.find();
  } catch (error) {
    return error;
  }
}

async function updateNote(id, newnoteObj) {
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
