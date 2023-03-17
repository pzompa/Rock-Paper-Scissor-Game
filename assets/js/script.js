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
const quitGameDisplay = document.getElementById('quit-game');
const possibleChoices = document.querySelectorAll('img');
const rulesButton = document.getElementById('rules');
const rules2Button = document.getElementById('rules2');

let userChoice;
let computerChoice;
let resultMessage;
let userCounter;
let computerCounter;

const choiceArray = ['Rock', 'Paper', 'Scissors'];


/** 
 * Hides not relavent elements - initial screen
 */
function runGame() {
    messageBoardDisplay.innerHTML = `<h2>Are you Ready? <br> Press Play</h2>`;
    if (screen.width > 1000) {
        messageBoardDisplay.style.height = '150px';
    }
    if (screen.width < 900 && screen.width >= 421) {
        messageBoardDisplay.style.height = '130px';
    }
    if (screen.width <= 420) {
        messageBoardDisplay.style.height = '90px';
    }

}

//Add eventlistener to play button and define function
playButton.addEventListener('click', playButtonFunction);

function playButtonFunction() {
    messageBoardDisplay.innerHTML = '<h2><br>Choose: Rock, Paper or Scissors<br><br>Whoever has 10 wins, wins the game!</h2>';
    if (screen.width > 1000) {
        messageBoardDisplay.style.height = '250px';
    }
    if (screen.width < 1000 && screen.width > 420) {
        messageBoardDisplay.style.height = '250px';
    }
    if (screen.width < 415) {
        messageBoardDisplay.style.height = '150px';
    }
    imageChoices.style.display = 'flex';
    resultDisplay.style.display = 'flex';
    playButton.style.display = 'none';
    resetButton.style.display = 'flex';
    quitGameDisplay.style.display = 'flex';
    gameTitle.style.display = 'none';
    rules2Button.style.display = 'flex';
    rulesButton.style.display = 'none';
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
    const randomNumber = Math.floor(Math.random() * possibleChoices.length);

    if (randomNumber === 0) {
        computerChoice = choiceArray[randomNumber];
    }
    if (randomNumber === 1) {
        computerChoice = choiceArray[randomNumber];
    }
    if (randomNumber === 2) {
        computerChoice = choiceArray[randomNumber];
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
    if (userCounter === 10) {
        quitGame();
        messageBoardDisplay.innerHTML = `Congratulations!!! <br><br>You Win the GAME !!!`;
    } else if (computerCounter === 10) {
        quitGame();
        messageBoardDisplay.innerHTML = `Sorry!!! <br><br>Computer Wins the GAME !!!`;
    } else {
        messageBoardDisplay.innerHTML = `<h2>Your choice: ${userChoice}<br><br>
                                    Computer choice: ${computerChoice}<br><br>
                                    ${resultMessage}</h2>`;
    }
}

// Add event listener to reset button and define function
resetButton.addEventListener('click', resetCounter);

function resetCounter() {
    userCounter = 0;
    computerCounter = 0;
    userCounterDisplay.innerHTML = userCounter;
    computerCounterDisplay.innerHTML = computerCounter;
}

//Add event listener to quit game button and define function
quitGameDisplay.addEventListener('click', quitGame);

/**
 * To quit the game and go back to start
 */
function quitGame() {
    playButton.style.display = 'flex';
    imageChoices.style.display = 'none';
    resultDisplay.style.display = 'none';
    resetButton.style.display = 'none';
    quitGameDisplay.style.display = 'none';
    gameTitle.style.display = 'block';
    rulesButton.style.display = 'flex';
    rules2Button.style.display = 'none';
    resetCounter();
    runGame();
}

//Modal//

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".btn-close");

// Add event listener to rules button and define function
rulesButton.addEventListener('click', openModal);
rules2Button.addEventListener('click', openModal);

// open modal function
function openModal() {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
    // display the modal in the center of the window screen  
    modal.style.left = (window.innerWidth - modal.clientWidth) / 2 + 'px';
    modal.style.top = (window.innerHeight - modal.clientHeight) / 2 + 'px';
    // makes the buttons in the background not clickable when the modal is open
    for (let choice = 0; choice < possibleChoices.length; choice++) {
        possibleChoices[choice].removeEventListener('click', gameChoice);
    }
}

// close the modal when the close button and overlay is clicked
closeModalBtn.addEventListener('click', closeModal);
overlay.addEventListener("click", closeModal);

function closeModal() {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
    // makes the buttons in the background clickable again when the modal is closed
    for (let choice = 0; choice < possibleChoices.length; choice++) {
        possibleChoices[choice].addEventListener('click', gameChoice);
    }
}

// close modal when the Esc key is pressed
document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
});