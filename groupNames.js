const express = require("express");
const router = express.Router();

const groupNames = [];

router.get("/", (req, res) => {
  res.send(groupNames);
});

router.post("/", (req, res) => {
  //console.log(req.body);

  const name = req.body.name;
  groupNames.push(name);
  res.send(name);
});

module.exports = router;
