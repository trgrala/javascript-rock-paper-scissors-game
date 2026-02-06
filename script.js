let playerScore = 0;
let computerScore = 0;
const playerScoreMsg = document.querySelector('#playerScore');
const computerScoreMsg = document.querySelector('#computerScore');
const playerIcon = document.querySelector('#playerIcon');
const computerIcon = document.querySelector('#computerIcon');
const gameMsg = document.querySelector('#gameMsg');

const resetButton = document.querySelector('#resetButton')
    resetButton.addEventListener('click', (e) => {
        resetGame();
    });


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

function setGameMsg(text, className){
    gameMsg.textContent = text;
    gameMsg.classList.remove('win','lose','tie');
    gameMsg.classList.add(className);
}

function playRound(playerChoice,computerChoice){
    console.log('Player vs Computer');

    if(playerChoice===computerChoice)
        setGameMsg('TIE!', 'tie')

        // console.log('Tie!');
    else if(
        (playerChoice === 'ROCK' && computerChoice === 'SCISSORS') ||
        (playerChoice === 'PAPER' && computerChoice === 'ROCK') ||
        (playerChoice === 'SCISSORS' && computerChoice === 'PAPER')
    ){
        playerIcon.textContent = playerChoice;
        computerIcon.textContent = computerChoice;
        setGameMsg('YOU WIN!','win');
        playerScore++
        playerScoreMsg.textContent = playerScore;

        // console.log('Player: '+playerChoice)
        // console.log('Computer: '+computerChoice)
        // console.log('----------------------------')
        // console.log('Player Wins!');
        // playerScore++
    }
    else{
        playerIcon.textContent = playerChoice;
        computerIcon.textContent = computerChoice;
        setGameMsg('YOU LOSE!','lose');
        computerScore++
        computerScoreMsg.textContent = computerScore;

        // console.log('Player: '+playerChoice)
        // console.log('Computer: '+computerChoice)
        // console.log('----------------------------')
        // console.log('Computer Wins!')
        // computerScore++
    }


    // gameMsg.textContent = 'Player Score: '+playerScore+' | '+'Computer Score: '+computerScore;

    isGameOver();
}

function isGameOver(){
    if(playerScore === 5){
        setGameMsg('YOU WON THE GAME!','win');
        disableButtons();
    }else if(computerScore === 5){
        setGameMsg('YOU LOST THE GAME!','lose');
        disableButtons();
    }
}

function disableButtons(){
    buttons.forEach(btn => {
        btn.disabled = true;
    })
    resetButton.classList.remove('hidden');
}

function resetGame(){

    buttons.forEach(btn => {
    btn.disabled = false;
    })
    
    resetButton.classList.add('hidden');
    playerScore=0;
    computerScore=0;

    playerScoreMsg.textContent = '0';
    computerScoreMsg.textContent = '0';

    setGameMsg('MAKE YOUR CHOICE','');
}