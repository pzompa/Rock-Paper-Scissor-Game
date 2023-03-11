// docstring
/* runs runGame() after loading body.
<body onload="runGame();">
*/

/** 
 * Hides not relavent elements - initial screen
 */
function runGame () {
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
playButton.addEventListener('click',playButtonFunction)

// Add eventlistener to choices images 
for(let choice=0;choice<possibleChoices.length;i++){
    possibleChoices[choice].addEventListener('click',gameChoice)
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
