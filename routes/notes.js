const express = require("express");
const services = require("../services");
const router = express.Router();

router.get("/", (req, res) => {
  services
    .getNotes()
    .then((notes) => {
      if (notes.length == 0) res.send("No recorded notes.");
      res.send(notes);
    })
    .catch((reason) => {
      console.error(reason);
      res.status(404).send(reason);
    });
});

router.get("/:id", (req, res) => {
  // return a single note
  const id = req.params.id;
  services
    .getNote(id)
    .then((value) => {
      res.send(value);
    })
    .catch((reason) => {
      res.send("##ERRORR ##");
    });
});

router.post("/", (req, res) => {
  const note = {
    groupName: req.body.name,
    title: req.body.title,
    entry: req.body.entry,
  };

  services
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
  services
    .updateNote(noteId, note)
    .then((value) => {
      res.send(value);
    })
    .catch((reason) => {
      res.status(400).send("Bad Request:", reason);
    });
});

//delete

module.exports = router;
