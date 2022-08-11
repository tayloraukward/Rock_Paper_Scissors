const buttons = document.querySelectorAll('button')
playerScore = 0;
compScore = 0;
let result = '';
let text = document.createElement('div');
let restart = document.createElement('button');
let playerDisplay = document.createElement('div');
let compDisplay = document.createElement('div');
restart.innerHTML = 'Play Again!';
restart.style.visibility = "hidden";
let restart_cont = document.querySelector('#restart-cont');
let text_cont = document.querySelector('#text-cont');
text.innerHTML = '';
text_cont.appendChild(text);
restart_cont.appendChild(restart);
// document.body.append(restart);





restart.addEventListener('click', () => {
    playerScore = 0;
    compScore = 0;
    text.textContent = '     _    ';
    text.style.color = 'white';
    playerDisplay.innerHTML = 'Player Score: '+ playerScore;
    compDisplay.innerHTML = 'Computer Score: '+ compScore;
    restart.style.visibility = "hidden";
});

function computerSelector(){
    let num = Math.floor(Math.random() * 10000) % 3;
    let computer = '';
    if (num == 0) computer = 'rock';
    else if (num == 1) computer = 'paper';
    else computer = 'scissors';
    return computer;
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
    let player = button.id;
    let comp = computerSelector();
    text.style.color = 'black';
    if (playerScore < 5 && compScore < 5) {
        if (player === 'rock') {
            if (comp === 'rock') {
                result = 'COMPUTER SELECTS ROCK. IT\'S A DRAW!';
            }
            else if (comp === 'paper'){
                result = "COMPUTER SELECTS PAPER. YOU LOSE!"
                compScore++;
            }
            else {
                result = 'COMPUTER SELECTS SCISSORS. YOU WIN!';
                playerScore++;
            }
        }
    else if (player === 'paper') {
            if (comp === 'rock') {
                result = 'COMPUTER SELECTS ROCK. YOU WIN!';
                playerScore++;
            }
            else if (comp === 'paper'){
                result = ' COMPUTER SELECTS PAPER. IT\'S A DRAW!';
            }
            else {
                result = "COMPUTER SELECTS SCISSORS. YOU LOSE!"
                compScore++;
            }
        }
        else{
            if (comp === 'rock') {
                result = "COMPUTER SELECTS ROCK. YOU LOSE!"
                compScore++;
            }
            else if (comp === 'paper'){
                result = 'COMPUTER SELECTS PAPER. YOU WIN!';
                playerScore++;
            }
            else {
                result = 'COMPUTER SELECTS SCISSORS. IT\'S A DRAW!';
            }
        }
        text.innerHTML = result;
        text.style.fontSize = '24px';
        text.style.textAlign = 'center';
        playerDisplay.innerHTML = 'Player Score: '+ playerScore;
        compDisplay.innerHTML = 'Computer Score: '+ compScore;
        let scores_cont = document.querySelector('#scores');
        scores_cont.appendChild(playerDisplay);
        scores_cont.appendChild(compDisplay);
    }
    if (playerScore >= 5){
        result = 'You have defeated the computer and are the first to 5 wins';
        text.innerHTML = result;
        restart.style.visibility = "visible";
    }
    else if (compScore >= 5){
        result = 'The computer has defeated you in a first to 5 match';
        text.innerHTML = result;
        restart.style.visibility = "visible";
    }
    
});
});

