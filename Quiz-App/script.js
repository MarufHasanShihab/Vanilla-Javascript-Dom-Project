const qustions = [
  {
    qustion: "which is largest animal in the world",
    answer: [
      { text: "Shark", correct: false },
      { text: "Bule Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    qustion: "which is the smallest country in the world",
    answer: [
      { text: "Vatican city", correct: true },
      { text: "Bhutan", correct: false },
      { text: "Nepal", correct: false },
      { text: "Shri Lanka", correct: false },
    ],
  },
  {
    qustion: "which is the largest district in the world",
    answer: [
      { text: "kalahari", correct: false },
      { text: "Gobai", correct: false },
      { text: "Sahara", correct: false },
      { text: "Antarctica", correct: true },
    ],
  },
  {
    qustion: "which is the smallest contient in the world",
    answer: [
      { text: "Asia", correct: false },
      { text: "Australia", correct: true },
      { text: "Arctic", correct: false },
      { text: "Afrcia", correct: false },
    ],
  },
];

const qustionElement = document.getElementById("qustion");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQustionIndex = 0;
let score = 0;

function startQuiz() {
  currentQustionIndex = 0;
  score = 0;
  nextButton.innerText = "Next";
  showQuize();
}

function showQuize() {
  resetState();
  let currentQustion = qustions[currentQustionIndex];
  let qustionNo = currentQustionIndex + 1;
  qustionElement.innerText = qustionNo + ". " + currentQustion.qustion;
  currentQustion.answer.forEach((answer) => {
    const button = document.createElement("button");
    button.classList.add("btn");
    button.innerText = answer.text;
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", function (e) {
      const selectBtn = e.target;
      const isCorrect = selectBtn.dataset.correct === "true";
      if (isCorrect) {
        selectBtn.classList.add("correct");
        score++;
      } else {
        selectBtn.classList.add("incorrect");
      }
      Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
          button.classList.add("correct");
        }
        button.disabled = true;
      })
      nextButton.style.display = "block";
    });
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function showScore(){
  resetState();
  qustionElement.innerHTML = `You Scored ${score} out of ${qustions.length}`
  nextButton.innerHTML = "play again";
  nextButton.style.display = "block";
}

function handleNextButton(){
  currentQustionIndex++;
  if(currentQustionIndex < qustions.length){
    showQustion()
  }else{
    showScore()
  }
}

nextButton.addEventListener("click", function(){
  if(currentQustionIndex > qustions.length){
    handleNextButton()
  }else{
    startQuiz()
  }
})

showQuize();
