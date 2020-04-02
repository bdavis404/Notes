const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/test", { useUnifiedTopology: true });
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.on("open", () => {
  console.log("mongobd connected...");
});
