var playerScore = 0;
var computerScore = 0;

function playRound(playerSelection, computerSelection) {

    let result;
    if(playerSelection==computerSelection.weakness){
        result = "Player won";
        playerScore++;
    }else if(playerSelection==computerSelection.strength){
        result = "Computer won";
        computerScore++;
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





while(playerScore<5 && computerScore<5) {
    
    const computerSelection = computerPlay();
    const playerSelection = prompt("Enter rock, paper or scissors").toLowerCase();

    if(playerSelection){

    }


    console.log(playRound(playerSelection, computerSelection));
    console.log(`Player Score:${playerScore}\nComputer Score:${computerScore}`);
}
  





