/* runs runGame() after loading body.
<body onload="runGame();">
*/

/** 
 * Hides not relavent elements - initial screen
 */
function runGame() {
    document.getElementById('play-button').style.display = 'flex';
    document.getElementById('image').style.display = 'none';
    document.getElementById('result').style.display = 'none';
    document.getElementById('reset').style.display = 'none';
    document.getElementById('quit-game').style.display= 'none';
    messageBoardDisplay.innerHTML = `<h2>Are you Ready? <br> Press Play</h2>`;
}
/**
 * Creat variables and get all the relevant elements
 */
const userChoiceDisplay = document.getElementById('user-choice')
const computerChoiceDisplay = document.getElementById('computer-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('img')
const messageBoardDisplay = document.getElementById('message-board')
const resultMessageDisplay = document.getElementById('result-message')
const youCounterDisplay = document.getElementById('you-counter')
const computerCounterDisplay = document.getElementById('computer-counter')

// Reset counter to Zero
const resetButton = document.getElementById('reset')
resetButton.addEventListener('click', resetCounter)
function resetCounter() {
    youCounter= 0
    computerCounter= 0
    youCounterDisplay.innerHTML= youCounter
    computerCounterDisplay.innerHTML = computerCounter
}

let reason
let userChoice
let computerChoice
let result
let resultMessage
let youCounter
let computerCounter

/**
 * Get playbutton and add eventlistener to it
 */
const playButton = document.getElementById('play-button')
playButton.addEventListener('click', playButtonFunction)

function playButtonFunction(){
    document.getElementById('image').style.display = 'flex';
    document.getElementById('result').style.display = 'flex';
    document.getElementById('play-button').style.display = 'none';
    document.getElementById('reset').style.display = 'block';
    document.getElementById('message-board').innerHTML = '<h2>Choose: Rock, Paper or Scissors</h2>'
    document.getElementById('quit-game').style.display= 'flex';
}

// Add eventlistener to choices images 
for (let choice = 0; choice < possibleChoices.length; choice++) {
    possibleChoices[choice].addEventListener('click', gameChoice)
}

/**
 * define function for click event
 */
function gameChoice(e) {
    userChoice = e.target.id
    youCounter = parseInt(youCounterDisplay.innerHTML)
    computerCounter = parseInt(computerCounterDisplay.innerHTML)
    generateComputerChoice()
    getResult()
}
/**
 * Generate computerChoice
 * assign it to Computer Choice variable
 */
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length + 1)

    if (randomNumber === 1) {
        computerChoice = 'Rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'Paper'
    }
    if (randomNumber === 3) {
        computerChoice = 'Scissors'
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
                resultMessage = 'Its a draw!'
                break;
            case 'Paper':
                resultMessage = 'Paper covers Rock. You lose!'
                computerCounter = ++computerCounter
                computerCounterDisplay.innerHTML = computerCounter
                break;
            case 'Scissors':
                resultMessage = 'Rock crushes Scissors.You Win!'
                youCounter = ++youCounter
                youCounterDisplay.innerHTML = youCounter
                break;
            default:
                resultMessage = ''
        }
    } else if (userChoice === 'Paper') {
        switch (computerChoice) {
            case 'Rock':
                resultMessage = 'Paper covers Rock.You Win!'
                youCounter = ++youCounter
                youCounterDisplay.innerHTML = youCounter
                break;
            case 'Paper':
                resultMessage = 'Its a draw!'                
                break;
            case 'Scissors':
                resultMessage = 'Scissors cut Paper.You lose!'
                computerCounter = ++computerCounter
                computerCounterDisplay.innerHTML = computerCounter
                break;
            default:
                resultMessage = ''
        }
    } else {
        switch (computerChoice) {
            case 'Rock':
                resultMessage = 'Rock crushes Scissors.You lose!'
                computerCounter = ++computerCounter
                computerCounterDisplay.innerHTML = computerCounter
                break;
            case 'Paper':
                resultMessage = 'Scissors cut Paper.You Win!'
                youCounter = ++youCounter
                youCounterDisplay.innerHTML = youCounter
                break;
            case 'Scissors':
                resultMessage = 'Its a draw!'
                break;
            default:
                resultMessage = ''
        }
    }
    messageBoardDisplay.innerHTML = `<h2>You have chosen : ${userChoice}<br>
                                    Computer has chosen : ${computerChoice}<br>
                                    ${resultMessage}</h2>`;
}

// quit Game
const quitGameDisplay= document.getElementById('quit-game')
quitGameDisplay.addEventListener('click', quitGame)

function quitGame(){
    resetCounter()
    runGame()
}


    