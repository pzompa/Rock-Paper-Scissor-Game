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