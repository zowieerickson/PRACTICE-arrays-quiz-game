const quiz = [
  [`What is my first name?`, `zowie`],
  [`What is my sister's first name?`, `nikita`],
  [`How many siblings do I have?`, `1`],
  [`What's my last name?`, `erickson`],
  [`What state do I live in?`, `florida`],
];

let answeredCorrectly = 0;

let questionsRight = [];
let questionsWrong = [];
let question;
let answer;
let response;

for (let i = 0; i < quiz.length; i++) {
  question = quiz[i][0];
  answer = quiz[i][1];
  response = prompt(question);

  if (response === answer) {
    answeredCorrectly++;
    questionsRight.push(question);
  } else {
    questionsWrong.push(question);
  }
}

function createListItems(arr) {
  let items = "";
  for (let i = 0; i < arr.length; i++) {
    items += `<li>${arr[i]}</li>`;
  }
  return items;
}

const main = document.querySelector("main");
main.innerHTML = `
<h1>You got ${answeredCorrectly} question(s) correct!</h1>
<h2>You got these questions right:</h2>
  <ol>${createListItems(questionsRight)}</ol>
  <h2>You got these questions wrong:</h2>
  <ol>${createListItems(questionsWrong)}</ol>`;
