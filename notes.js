const express = require("express");
const groupNames = require("./groupNames").storeGroupName;
const router = express.Router();

const notes = [
  {
    groupName: "science",
    title: "Ch 1",
    notes:
      "These divisions and subsets include analysis of algorithms and formal semantics of programming languages. Technically, there are hundreds of divisions and subsets besides these two. Each of the multiple parts has its leaders (of popularity) and there are many associations and professional social groups and publications of distinction."
  }
];

router.get("/", (req, res) => {
  res.send(notes);
});

router.get("/:groupName", (req, res) => {
  // return list of notes of a speciic group

  const note = notes.find(note => note.groupName === req.params.groupName);
  if (!note) return res.status(404).send("Notes not found");

  res.send(note);
});

router.post("/", (req, res) => {
  //console.log(req.body)

  const note = {
    groupName: req.body.name,
    title: req.body.title,
    notes: req.body.notes
  };

  notes.push(notes);
  res.send(note);
  //groupNames.groupNames;
  groupNames(note.groupName);
});

module.exports = router;
