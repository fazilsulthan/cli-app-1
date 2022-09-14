var readlineSync = require("readline-sync");

var score = 0;

var userName = readlineSync.question("May I know your Name? ");

console.log("Welcome!!! " + userName + " Do you know about Fazil? ");

function quiz(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    console.log("You were Right!!");
    score = score + 1;
    console.log("Your Current score: " + score);
  } else {
    console.log("You were Wrong!!");
  }
}

var questions = [
  {
    question: "Where he was from? ",
    answer: "chennai",
  },
  {
    question: "What was his favourite food? ",
    answer: "dosa",
  },
  {
    question: "what was his bithdate? ",
    answer: "31",
  },
  {
    question: "what was his favourite colour? ",
    answer: "black",
  },
  {
    question: "What was his favourite ice-cream? ",
    answer: "chocolate",
  },
];

for (var i = 0; i < questions.length; i++) {
  var currentQuestions = questions[i];
  quiz(currentQuestions.question, currentQuestions.answer);
}
console.log("Your overall Score: " + score);
