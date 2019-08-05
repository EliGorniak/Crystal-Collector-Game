const numberOfCrystals = 4
let crystalValues = [];
let randomNumber = 0; // get a random number between 19 and 120.
let totalScore = 0;
var wins = 0;
var losses = 0;

function generateStoneValues() {
    for (var i = 0; i < numberOfCrystals; i++) {
        crystalValues[i] = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
        console.log(`o valor do crystal ${i} e ${crystalValues[i]}`);
    }
}

function generateRandomNumber() {
    randomNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    console.log(`o valor do numero randomizado e ${randomNumber}`);
}

function checkTotalScore(index) {
    console.log(index);
    updateTotalScore(index);
    checkWin();
    checkGameOver();
    updateFields();
}

function updateTotalScore(index) {
    totalScore += crystalValues[index];
    console.log(crystalValues[index]);
    console.log(totalScore);
}

function startGame() {
    totalScore = 0;
    generateRandomNumber();
    generateStoneValues();
    updateFields();
}


function checkWin() {
    if (totalScore === randomNumber) {
        wins++;
        updateFields();
        alert('Congrats! You won!');        
        startGame();
    }
}

function checkGameOver() {
    if (totalScore > randomNumber) {
        losses++;
        updateFields();
        alert('Ohh no! You lose! Try again!');        
        startGame();
    }
}

function updateFields() {
    document.getElementById("randomNumber").innerText = randomNumber;
    document.getElementById("totalScore").innerText = totalScore;
    document.getElementById("totalWins").innerText = wins;
    document.getElementById("totalLosses").innerText = losses;
}