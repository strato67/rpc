var playerScore = 0;
var computerScore = 0;

const buttons = document.querySelectorAll('.selections');

buttons.forEach(button =>{
    button.addEventListener('click', e=>{
        const statusBar = document.querySelector('#gamestatus');
        statusBar.innerText = playRound(e.target.id);
    })


});



function playRound(playerSelection, computerSelection=computerPlay()) {

    let result;
    
    if(playerSelection==computerSelection.weakness){
        result = "Player won";
        playerScore++;
        setPlayerScore();
    }else if(playerSelection==computerSelection.strength){
        result = "Computer won";
        computerScore++;
        setComputerScore();
    }else{
        result = "Tie";
    }

    return `Player selects ${playerSelection},
    Computer selects ${computerSelection.name},
    Result: ${result} this round`;

}

function computerPlay(){
    let randNum = Math.floor(Math.random()*3);
    return selections[randNum];
}

function setPlayerScore(){
    const scoreboard = document.querySelector('#playerscore');
    scoreboard.innerText = playerScore;
}

function setComputerScore(){
    const scoreboard = document.querySelector('#computerscore');
    scoreboard.innerText = computerScore;
}




/*


while(playerScore<5 && computerScore<5) {
    
   

    console.log(playRound(playerSelection, computerSelection));
    console.log(`Player Score:${playerScore}\nComputer Score:${computerScore}`);
}
*/





