const express = require("express");
const groupNames = require("./groupNames");
const notes = require("./notes");
const app = express();

app.use(express.json());

app.use("/groups", groupNames.router);
app.use("/notes", notes);

// export PORT=5000 == assign port to env variable
const port = 3000;
app.listen(port, () => {
  console.log(`listeneing on port ${port}...`);
});
