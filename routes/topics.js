const express = require("express");
const topicService = require("../services/topicService");
const router = express.Router();

const groupNames = ["science"];

router.get("/", (req, res) => {
  // get all topics
  console.log("getting topics...");
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
