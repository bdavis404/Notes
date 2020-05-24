const dbConfig = require("../db/dbConfig");
const Note = dbConfig.Note;

// Create, Read, Update, Delete topic

async function getTopics() {
  const topics = [];
  await Note.find()
    .select("topics")
    .then((notes) => {
      notes.forEach((note) => {
        if (!note.topic) {
          return;
        } else {
          topics.push(note.topic);
        }
      });
    });
  return topics;
}

// create a topic

module.exports = {
  getTopics: getTopics,
};
