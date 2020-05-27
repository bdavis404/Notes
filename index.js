const express = require("express");
const notes = require("./routes/notes");
const topics = require("./routes/topics");
const dbConfig = require("./db/dbConfig");
const app = express();

// middleware
app.use(express.json());

// start mongodb connection
dbConfig.startDBConnection();

// routes
app.use("/notes", notes);
app.use("/topics", topics);

// export PORT=5000 == assign port to env variable
const port = 3000;
app.listen(port, () => {
  console.log(`listeneing on port ${port}...`);
});
