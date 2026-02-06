let playerScore = 0;
let computerScore = 0;

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
        console.log('Tie!');
    else if(
        (playerChoice === 'ROCK' && computerChoice === 'SCISSORS') ||
        (playerChoice === 'PAPER' && computerChoice === 'ROCK') ||
        (playerChoice === 'SCISSORS' && computerChoice === 'PAPER')
    ){
        console.log('Player: '+playerChoice)
        console.log('Computer: '+computerChoice)
        console.log('----------------------------')
        console.log('Player Wins!');
        playerScore++
    }
    else{
        console.log('Player: '+playerChoice)
        console.log('Computer: '+computerChoice)
        console.log('----------------------------')
        console.log('Computer Wins!')
        computerScore++
    }

    console.log('Player Score: '+playerScore+' - '+'Computer Score: '+computerScore)
}