const express = require("express");
const noteService = require("../noteService");
const router = express.Router();

router.get("/", (req, res) => {
  noteService.getNotes().then((notes) => {
    if (notes.length == 0) res.send("No recorded notes.");
    res.send(notes);
  });
});

router.get("/:id", (req, res) => {
  // return a single note
  const id = req.params.id;

  noteService
    .getNote(id)
    .then((note) => {
      if (note) {
        res.send(note);
      } else {
        res.status(404).send("Note not Found");
      }
    })
    .catch((reason) => {
      res.send("## ERRORR ##", reason);
    });
});

router.post("/", (req, res) => {
  const note = {
    groupName: req.body.name,
    title: req.body.title,
    entry: req.body.entry,
  };

  noteService.createNote(note).then((note) => {
    res.send(note);
  });
});

router.put("/:id", (req, res) => {
  const note = req.body;
  const noteId = req.params.id;

  noteService
    .updateNote(noteId, note)
    .then((value) => {
      res.send(value);
    })
    .catch((reason) => {
      res.status(400).send("Bad Request:", reason);
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  noteService
    .deleteNote(id)
    .then((result) => {
      if (result) {
        res.send(result);
      } else {
        res.status(400).send("Bad Request:", reason);
      }
    })
    .catch((reason) => {
      res.status(400).send("Bad Request:", reason);
    });
});

module.exports = router;
