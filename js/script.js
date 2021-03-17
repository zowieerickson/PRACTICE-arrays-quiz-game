const quiz = [
  [`What is my first name?`, `zowie`],
  [`What is my sister's first name?`, `nikita`],
  [`How many siblings do I have?`, `1`],
  [`What's my last name?`, `erickson`],
  [`What state do I live in?`, `florida`],
];

let answeredCorrectly = 0;

// let questionsRight = [];
// let questionsWrong = [];
let correctItems = "";
let incorrectItems = "";
let question;

function checkQuestions(arr) {
  for (let i = 0; i < arr.length; i++) {
    question = prompt(arr[i][0]);
    if (question.toLowerCase() === arr[i][1]) {
      answeredCorrectly++;
      correctItems += `<li>${arr[i][0]}</li>`;
    } else if (question.toLowerCase() !== arr[i][1]) {
      incorrectItems += `<li>${arr[i][0]}</li>`;
    }
  }
}
checkQuestions(quiz);

const main = document.querySelector("main");
main.innerHTML = `
  <h1>You got ${answeredCorrectly} question(s) correct!</h1>
  <h2>You got these questions right:</h2>
  <ol>${correctItems}</ol>
  <h2>You got these questions wrong:</h2>
  <ol>${incorrectItems}</ol>`;
