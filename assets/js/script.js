/*jshint esversion: 6 */
/**
 * Create variables and grab all the relevant elements
 */
const resultDisplay = document.getElementById('result');
const messageBoardDisplay = document.getElementById('message-board');
const userCounterDisplay = document.getElementById('user-counter');
const computerCounterDisplay = document.getElementById('computer-counter');
const imageChoices = document.getElementById('image');
const gameTitle = document.getElementById('game-title');
const playButton = document.getElementById('play-button');
const resetButton = document.getElementById('reset');
const quitGameDisplay= document.getElementById('quit-game');
const possibleChoices = document.querySelectorAll('img');


let userChoice;
let computerChoice;
let resultMessage;
let userCounter;
let computerCounter;

/** 
 * Hides not relavent elements - initial screen
 */
function runGame() {
    messageBoardDisplay.innerHTML = `<h2>Are you Ready? <br> Press Play</h2>`;
    messageBoardDisplay.style.height = '130px';
}

//Add eventlistener to play button and define function
playButton.addEventListener('click', playButtonFunction);

function playButtonFunction(){
    messageBoardDisplay.innerHTML = '<h2><br><br>Choose: Rock, Paper or Scissors</h2>';
    messageBoardDisplay.style.height = '250px';
    imageChoices.style.display = 'flex';
    resultDisplay.style.display = 'flex';
    playButton.style.display = 'none';
    resetButton.style.display = 'flex';
    quitGameDisplay.style.display= 'flex';
    gameTitle.style.display='none';
}

// Add eventlistener to choices images 
for (let choice = 0; choice < possibleChoices.length; choice++) {
    possibleChoices[choice].addEventListener('click', gameChoice);
}

/**
 * define function for click event
 */
function gameChoice(e) {
    userChoice = e.target.id;
    userCounter = parseInt(userCounterDisplay.innerHTML);
    computerCounter = parseInt(computerCounterDisplay.innerHTML);
    generateComputerChoice();
    getResult();
}

/**
 * Generate computerChoice
 * assign it to Computer Choice variable
 */
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length + 1);

    if (randomNumber === 1) {
        computerChoice = 'Rock';
    }
    if (randomNumber === 2) {
        computerChoice = 'Paper';
    }
    if (randomNumber === 3) {
        computerChoice = 'Scissors';
    }
}

/**
 * compares and indicates who won
 * and gives result
 */
function getResult() {
    if (userChoice === 'Rock') {
        switch (computerChoice) {
            case 'Rock':
                resultMessage = 'Its a draw!';
                break;
            case 'Paper':
                resultMessage = 'Paper covers Rock. You lose!';
                computerCounter = ++computerCounter;
                computerCounterDisplay.innerHTML = computerCounter;
                break;
            case 'Scissors':
                resultMessage = 'Rock crushes Scissors.You Win!';
                userCounter = ++userCounter;
                userCounterDisplay.innerHTML = userCounter;
                break;
            default:
                resultMessage = '';
        }
    } else if (userChoice === 'Paper') {
        switch (computerChoice) {
            case 'Rock':
                resultMessage = 'Paper covers Rock.You Win!';
                userCounter = ++userCounter;
                userCounterDisplay.innerHTML = userCounter;
                break;
            case 'Paper':
                resultMessage = 'Its a draw!';               
                break;
            case 'Scissors':
                resultMessage = 'Scissors cut Paper.You lose!';
                computerCounter = ++computerCounter;
                computerCounterDisplay.innerHTML = computerCounter;
                break;
            default:
                resultMessage = '';
        }
    } else {
        switch (computerChoice) {
            case 'Rock':
                resultMessage = 'Rock crushes Scissors.You lose!';
                computerCounter = ++computerCounter;
                computerCounterDisplay.innerHTML = computerCounter;
                break;
            case 'Paper':
                resultMessage = 'Scissors cut Paper.You Win!';
                userCounter = ++userCounter;
                userCounterDisplay.innerHTML = userCounter;
                break;
            case 'Scissors':
                resultMessage = 'Its a draw!';
                break;
            default:
                resultMessage = '';
        }
    }
    messageBoardDisplay.innerHTML = `<h2>Your choice: ${userChoice}<br><br>
                                    Computer choice: ${computerChoice}<br><br>
                                    ${resultMessage}</h2>`;
}

// Add event listener to reset button and define function
resetButton.addEventListener('click', resetCounter);
function resetCounter() {
    userCounter= 0;
    computerCounter= 0;
    userCounterDisplay.innerHTML= userCounter;
    computerCounterDisplay.innerHTML = computerCounter;
}


//Add event listener to quit game button and define function
quitGameDisplay.addEventListener('click', quitGame);

/**
 * To quit the game and go back to start
 */
function quitGame(){
    playButton.style.display = 'flex';
    imageChoices.style.display = 'none';
    resultDisplay.style.display = 'none';
    resetButton.style.display = 'none';
    quitGameDisplay.style.display= 'none';
    gameTitle.style.display= 'block';
    resetCounter();
    runGame();
}
