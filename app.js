const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const logs = [
  {
    captainName: "Picard",
    title: "Courage",
    post: "Courage can be an emotion too.",
    mistakesWereMadeToday: true,
    daysSinceLastCrisis: 100,
  },
  {
    captainName: "Ahab",
    title: "Whale",
    post:
      "By heavens man, we are turned round and round in this world, like yonder windlass, and fate is the handspike.",
    mistakesWereMadeToday: true,
    daysSinceLastCrisis: 20,
  },
  {
    captainName: "Sarah Lance",
    title: "Vandal Savage",
    post:
      "I’d tell you to go to hell, but you’d probably just feel at home there.",
    mistakesWereMadeToday: true,
    daysSinceLastCrisis: 0,
  },
];

app.get("/", (req, res) => {
  res.send("Welcome to the captain's log!");
});

app.get("/logs", (req, res) => {
  res.json(logs);
});

app.get("/logs/:id", (req, res) => {
  const id = req.params.id;
  const log = logs[id - 1];
  if (log) {
    res.json(log);
  } else {
    res.redirect("/404");
  }
});

app.post("/logs", (req, res) => {
  const newLog = {
    captainName: req.body.captainName,
    title: req.body.title,
    post: req.body.post,
    mistakesWereMadeToday: req.body.mistakesWereMadeToday,
    daysSinceLastCrisis: req.body.daysSinceLastCrisis,
  };
  logs.push(newLog);
  res.status(201).json(newLog);
});

app.put("/logs/:id", (req, res) => {
  const id = req.params.id;
  if (id >= 1 && id <= logs.length) {
    logs[id - 1] = {
      captainName: req.body.captainName,
      title: req.body.title,
      post: req.body.post,
      mistakesWereMadeToday: req.body.mistakesWereMadeToday,
      daysSinceLastCrisis: req.body.daysSinceLastCrisis,
    };
    res.sendStatus(204);
  } else {
    res.redirect("/404");
  }
});

app.delete("/logs/:id", (req, res) => {
  const id = req.params.id;
  if (id >= 1 && id <= logs.length) {
    logs.splice(id - 1, 1);
    res.sendStatus(204);
  } else {
    res.redirect("/404");
  }
});

app.use((req, res) => {
  res.status(404).send("Sorry, no page found!");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
