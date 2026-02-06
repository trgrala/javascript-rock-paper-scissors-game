let playerScore = 0;
let computerScore = 0;
const playerScoreMsg = document.querySelector('#playerScore');
const computerScoreMsg = document.querySelector('#computerScore');
const playerIcon = document.querySelector('#playerIcon');
const computerIcon = document.querySelector('#computerIcon');
const roundMsg = document.querySelector('#roundMsg');
const gameMsg = document.querySelector('#gameMsg');
const winMsg = document.querySelector('#winMsg');

const buttons = document.querySelectorAll(".btn-choice");

buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let playerChoice = e.target.dataset.choice;

        let computerChoice = getComputerChoice();

        playRound(playerChoice,computerChoice);
    });
});

function getComputerChoice(){
    const choice = ['ROCK','PAPER','SCISSORS'];
    const random = Math.floor(Math.random()*3);
    return choice[random];
}

function playRound(playerChoice,computerChoice){
    console.log('Player vs Computer');

    if(playerChoice===computerChoice)
        roundMsg.textContent = "It's a TIE!";

        // console.log('Tie!');
    else if(
        (playerChoice === 'ROCK' && computerChoice === 'SCISSORS') ||
        (playerChoice === 'PAPER' && computerChoice === 'ROCK') ||
        (playerChoice === 'SCISSORS' && computerChoice === 'PAPER')
    ){
        playerIcon.textContent = 'Player choice:'+playerChoice;
        computerIcon.textContent = 'Computer choice:'+computerChoice;
        roundMsg.textContent = 'Player Wins!';
        playerScore++
        playerScoreMsg.textContent = playerScore;

        // console.log('Player: '+playerChoice)
        // console.log('Computer: '+computerChoice)
        // console.log('----------------------------')
        // console.log('Player Wins!');
        // playerScore++
    }
    else{
        playerIcon.textContent = 'Player choice:'+playerChoice;
        computerIcon.textContent = 'Computer choice:'+computerChoice;
        roundMsg.textContent = 'Computer Wins!';
        computerScore++
        computerScoreMsg.textContent = computerScore;

        // console.log('Player: '+playerChoice)
        // console.log('Computer: '+computerChoice)
        // console.log('----------------------------')
        // console.log('Computer Wins!')
        // computerScore++
    }

    gameMsg.textContent = 'Player Score: '+playerScore+' | '+'Computer Score: '+computerScore;

    isGameOver();
}

function isGameOver(){
    if(playerScore === 5){
        winMsg.textContent = 'Player wins the game!';
    }else if(computerScore === 5){
        winMsg.textContent = 'Computer wins the game!';
    }
}