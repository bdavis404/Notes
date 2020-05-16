const express = require("express");
const topicService = require("../topicService");
const router = express.Router();

const groupNames = ["science"];

router.get("/", (req, res) => {
  // returning existing group
  topicService.getTopics().then((topics) => {
    res.send(topics);
  });
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

module.exports = router;
