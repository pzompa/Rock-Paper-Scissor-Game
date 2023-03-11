// docstring
/* runs runGame() after loading body.
<body onload="runGame();">
*/

/** 
 * Hides not relavent elements - initial screen
 */
function runGame() {
    // initial style
    document.getElementById('image').style.display = 'none';
    document.getElementById('result').style.display = 'none';
    document.getElementById('reset').style.display = 'none';
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
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'paper'
    }
    if (randomNumber === 3) {
        computerChoice = 'scissors'
    }
}
/**
 * compares and indicates who won
 * and gives result
 */
function getResult() {
    if (userChoice === 'rock') {
        switch (computerChoice) {
            case 'rock':
                resultMessage = 'Its a draw!'
                break;
            case 'paper':
                resultMessage = 'You lose!'
                computerCounter = ++computerCounter
                computerCounterDisplay.innerHTML = computerCounter
                break;
            case 'scissors':
                resultMessage = 'You Win!'
                youCounter = ++youCounter
                youCounterDisplay.innerHTML = youCounter
                break;
            default:
                resultMessage = ''
        }
    } else if (userChoice === 'paper') {
        switch (computerChoice) {
            case 'rock':
                resultMessage = 'You Win!'
                youCounter = ++youCounter
                youCounterDisplay.innerHTML = youCounter
                break;
            case 'paper':
                resultMessage = 'Its a draw!'                
                break;
            case 'scissors':
                resultMessage = 'You lose!'
                computerCounter = ++computerCounter
                computerCounterDisplay.innerHTML = computerCounter
                break;
            default:
                resultMessage = ''
        }
    } else {
        switch (computerChoice) {
            case 'rock':
                resultMessage = 'You lose!'
                computerCounter = ++computerCounter
                computerCounterDisplay.innerHTML = computerCounter
                break;
            case 'paper':
                resultMessage = 'You Win!'
                youCounter = ++youCounter
                youCounterDisplay.innerHTML = youCounter
                break;
            case 'scissors':
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
