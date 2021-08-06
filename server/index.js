const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

let goals = ["Make it work"];

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortune", (req, res) => {
  const fortunes = ["Career change coming soon",
    "New romance on the horizon", "Windfall headed your way", 
    "Storm clouds up ahead", "New baby coming soon", "Don't drink the Kool-aid"]

    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];

    res.status(200).send(randomFortune);
});

app.get("/api/words", (req, res) => {
  const positiveWords = ["Happy!", "Healthy!", "Beautiful!", "Wonderful!", "Smart!", "Joyful!", "Peaceful!", "Lucky!"];

  let randomIndex = Math.floor(Math.random() * positiveWords.length);
  let randomWord = positiveWords[randomIndex];

  res.status(200).send(randomWord);
  
});

app.post("/api/goals", (req, res) => {
  let {goal} = req.body;
  goals.push(goal);
  res.status(200).send(goals);
})

app.get("/api/goals", (req, res) => {
  res.status(200).send(goals);
})

app.get("/api/quotes", (req, res) => {
  let quotes = ["The best preparation for tomorrow is doing your best today.",
    "Keep your face always toward the sunshine and shadows will fall behind you."]
  res.status(200).send();
})

app.listen(4000, () => console.log("Server running on 4000"));
