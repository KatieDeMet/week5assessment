const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

let goals = [];

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
  let {id, goal} = req.body;
  let goalObj = {
    id: id,
    goal: goal
  }
  goals.push(goalObj);
  res.status(200).send(goals);
})

app.delete("/api/goals/:id", (req, res) => {
  let index = goals.findIndex(goal => goal.id === +req.params.id)
  goals.splice(index, 1);
  res.status(200).send(goals);
})

app.get("/api/quotes", (req, res) => {
  let quotes = {
    "Brown": "The best preparation for tomorrow is doing your best today.",
    "Whitman": "Keep your face always toward the sunshine and shadows will fall behind you.",
    "Lombardi": "Perfection is not attainable, but if we chace perfection we can catch excellence."
  }
    res.status(200).send(quotes);
})

app.get("/api/pics", (req, res) => {
  let images = ["../images/smiley.jpg", "../images/success.jpg", "../images/uphill.jpg", "../images/victory.jpg", "../images/waterButterflies.jpg"];
  let randomIndex = Math.floor(Math.random() * images.length);
  let randomImage = images[randomIndex];
  res.status(200).send(randomImage);
})

app.listen(4000, () => console.log("Server running on 4000"));
