const dbConfig = require("./db/dbConfig");
const Note = dbConfig.Note;

async function getTopics() {
  const topics = [];
  await Note.find()
    .select("topics")
    .then((notes) => {
      notes.forEach((note) => {
        if (!note.topic) {
          return;
        }
        topics.push(note.topic);
      });
    });
  return topics;
}

// create a topic

module.exports = {
  getTopics: getTopics,
};
