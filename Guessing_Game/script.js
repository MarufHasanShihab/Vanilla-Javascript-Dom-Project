// Finding Element 
const cardBody = document.querySelector(".card");
const form = cardBody.querySelector("form");
const guessingNumber = form.querySelector("#guessingNumber");
const button = form.querySelector(".btn");
const resultText = cardBody.querySelector(".resultText");
const totalWinOrLostMessage = document.createElement("p");
const remainingAttempts = cardBody.querySelector(".remainingAttempts");

// initialze
let totalWin = 0;
let totalLost = 0;
let attempts = 0;
let totalAttempts = 5;


form.addEventListener("submit", (e)=>{
    e.preventDefault();
    let guessNumber = Number(guessingNumber.value)
    attempts++;
    if(attempts === 5){
        guessingNumber.disabled = true;
        button.disabled = true;
    } 
     if(attempts < 6){
        checkResult(guessNumber)
        remainingAttempts.innerHTML = `Remaining Attempts: ${totalAttempts - attempts}`
    }
    guessingNumber.value = ""
})

const checkResult = (guessingNumber)=>{
    let randomNumber = getRandomNumber(5)
    if(guessingNumber === randomNumber){
        totalWin++;
        resultText.innerHTML = `You Have Win`
    }else{
        totalLost++;
        resultText.innerHTML = `You Have Lost, Random Number: ${randomNumber}`
    }
    totalWinOrLostMessage.innerHTML = `Win: ${totalWin} Lost: ${totalLost}`
    totalWinOrLostMessage.classList.add("large-text")
    cardBody.appendChild(totalWinOrLostMessage)
}

const getRandomNumber = (limit)=>{
    return Math.floor(Math.random()* limit + 1)
}
