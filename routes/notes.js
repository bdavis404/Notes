const express = require("express");
const noteService = require("../services/noteService");
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
      console.log(note);
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
    entry: req.body.entry,
    title: req.body.title,
    topic: req.body.topic,
  };
  // TODO: validate(req.body)
  noteService.createNote(note).then((note) => {
    res.send(note);
  });
});
// TODO: validate(req.body)
router.put("/:id", (req, res) => {
  const note = req.body;
  const noteId = req.params.id;

  noteService
    .updateNote(noteId, note)
    .then((value) => {
      res.send(value);
    })
    .catch((reason) => {
      res.status(500).send("Bad Request:", reason);
    });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  noteService
    .deleteNote(id)
    .then((result) => {
      res.send("Delete Successful");
    })
    .catch((reason) => {
      res.status(400).send("Bad Request:", reason);
    });
});

module.exports = router;
