const express = require("express");
const services = require("../services");
const router = express.Router();

router.get("/", (req, res) => {
  // res.send(notes);
  const result = services.getNotes();
  result.then(
    (notes) => {
      res.send(notes);
    },
    (reason) => {
      console.error(reason);
      res.status(404).send(reason);
    }
  );
});

router.get("/:groupName", (req, res) => {
  // return list of notes of a speciic group

  const note = notes.find((note) => note.groupName === req.params.groupName);
  if (!note) return res.status(404).send("Notes not found");

  res.send(note);
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

module.exports = router;
