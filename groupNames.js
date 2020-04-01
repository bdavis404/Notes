const express = require("express");
const router = express.Router();

const groupNames = ["science"];

router.get("/", (req, res) => {
  // returning existing groups

  res.send(groupNames);
});

router.post("/", (req, res) => {
  // creating a group

  const name = req.body.name;
  groupNames.push(name);
  res.send(name);
});

function storeGroupName(name) {
  groupNames.push(name);
}

module.exports = { router, storeGroupName };
