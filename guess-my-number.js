"use strict";

const againButton = document.querySelector(".again-button");
const displayGuess = document.querySelector(".display-correct-guess");
const input = document.querySelector(".input");
const checkButton = document.querySelector(".check-button");
const score = document.querySelector(".score");
const highScore = document.querySelector(".highscore");
const print = document.querySelector(".display");
const guessText = document.querySelector(".guess-output-text");
const bodyBackground = document.querySelector("body");
let scoreNumb = 20;
let highScoreNumb = 0;

let numb = Math.trunc(Math.random() * 20) + 1;

const checkGuess = function () {
  const x = Number(input.value);
  if (x < 1 || x > 20) {
    guessText.textContent = `Please enter a number between 1 - 20`;
  } else if (x < numb) {
    if (scoreNumb > 0) {
      scoreNumb--;
      score.textContent = scoreNumb;
      guessText.textContent = `📉 Too low`;
    }
  } else if (x > numb) {
    if (scoreNumb > 0) {
      scoreNumb--;
      score.textContent = scoreNumb;
      guessText.textContent = `📈 Too high`;
    }
  } else if (x === numb) {
    guessText.textContent = `🎉 Correct number`;
    displayGuess.textContent = numb;
    if (scoreNumb > highScoreNumb) {
      highScoreNumb += scoreNumb;
      highScore.textContent = highScoreNumb;
    }
    scoreNumb = 0;
    bodyBackground.classList.add("mint-green");
  }
};

const resetGuess = function () {
  numb = Math.trunc(Math.random() * 20) + 1;
  console.log(numb);
  bodyBackground.classList.remove("mint-green");
  input.value = "";
  guessText.textContent = `Start guessing...`;
  score.textContent = 20;
  scoreNumb = 20;
  displayGuess.textContent = `?`;
};

checkButton.addEventListener("click", checkGuess);
againButton.addEventListener("click", resetGuess);
