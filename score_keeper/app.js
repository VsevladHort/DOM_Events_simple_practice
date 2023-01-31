const selectGameRule = document.querySelector('#rule-select');
const fstBtn = document.querySelector('#game-plus-one-btn');
const sndBtn = document.querySelector('#game-plus-two-btn');
const resetBtn = document.querySelector('#game-reset-btn');
const scoreDisplay = document.querySelector('.game-score-display');
const finishedGameClass = 'game-score-display-game-finished';
let fstPlayerScore = 0;
let sndPlayerScore = 0;

function setGameFinishedEnvironment(whoWon) {
    scoreDisplay.classList.toggle(finishedGameClass);
    scoreDisplay.innerText += ` Player ${whoWon} won!`
    fstBtn.setAttribute('disabled', 'true');
    sndBtn.setAttribute('disabled', 'true');
    selectGameRule.setAttribute('disabled', 'true');
}

function resetGameEnvironment() {
    scoreDisplay.classList.remove(finishedGameClass);
    scoreDisplay.innerText = '0 to 0'
    fstBtn.removeAttribute('disabled');
    sndBtn.removeAttribute('disabled');
    selectGameRule.removeAttribute('disabled');
    fstPlayerScore = 0;
    sndPlayerScore = 0;
}

fstBtn.addEventListener('click', () => {
    fstPlayerScore++;
    scoreDisplay.innerText = `${fstPlayerScore} to ${sndPlayerScore}`;
    if (fstPlayerScore >= selectGameRule.value) {
        setGameFinishedEnvironment('1');
    }
});

sndBtn.addEventListener('click', () => {
    sndPlayerScore++;
    scoreDisplay.innerText = `${fstPlayerScore} to ${sndPlayerScore}`;
    if (sndPlayerScore >= selectGameRule.value) {
        setGameFinishedEnvironment('2');
    }
});

resetBtn.addEventListener('click', () => {
    resetGameEnvironment();
})

selectGameRule.addEventListener('change', () => {
    if (fstPlayerScore >= selectGameRule.value) {
        setGameFinishedEnvironment('1');
    } else if (sndPlayerScore >= selectGameRule.value) {
        setGameFinishedEnvironment('2');
    }
});