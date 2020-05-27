const mongoose = require("mongoose");

function startDBConnection() {
  mongoose
    .set("useFindAndModify", false)
    .set("useNewUrlParser", true)
    .set("useUnifiedTopology", true)
    .connect("mongodb://localhost/Notes-App")
    .then(() => {
      console.log("MongoDB connected....");
    })
    .catch((err) => {
      console.error("connection failute", err);
    });
}

module.exports = {
  startDBConnection,
};
