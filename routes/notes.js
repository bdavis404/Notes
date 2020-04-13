const express = require("express");
const services = require("../services");
const router = express.Router();

router.get("/", (req, res) => {
  // res.send(notes);
  const result = services.getNotes();
  result.then(
    (notes) => {
      if (notes.length == 0) res.send("No recorded notes.");
      res.send(notes);
    },
    (reason) => {
      console.error(reason);
      res.status(404).send(reason);
    }
  );
});

router.get("/:id", (req, res) => {
  // return a single note
  const id = req.params.id;
  const note = services.getNote(id);
  note.then(
    (value) => {
      res.send(value);
    },
    (reason) => {
      res.status(404).send("Note Not Found");
    }
  );
});

router.post("/", (req, res) => {
  const note = {
    groupName: req.body.name,
    title: req.body.title,
    entry: req.body.entry,
  };

  const result = services.createNote(note);

  result.then(
    (value) => {
      res.send(value);
    },
    (reason) => {
      console.error(reason);
      res.status(400).send("Bad request");
    }
  );
});

// put

//delete

module.exports = router;
