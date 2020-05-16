const express = require("express");
//const groupNames = require("./routes/groupNames");
const notes = require("./routes/notes");
const dbConfig = require("./db/dbConfig");
const app = express();

// middleware
app.use(express.json());

// start mongodb connection
dbConfig.startDBConnection();

// routes
//app.use("/topics", groupNames.router);
app.use("/notes", notes);

// export PORT=5000 == assign port to env variable
const port = 3000;
app.listen(port, () => {
  console.log(`listeneing on port ${port}...`);
});
