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
      res.send(note);
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

  noteService
    .createNote(note)
    .then((note) => {
      res.send(note);
    })
    .catch((reason) => {
      res.status(500).send("Backend Error", reason);
    });
});

// put
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

//delete
//router.delete("/:id", (req, res) => {});

module.exports = router;
