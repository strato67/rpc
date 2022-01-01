
//console.log(selections[0].name);

function playRound(playerSelection, computerSelection) {

    let result;
    if(playerSelection==computerSelection.weakness){
        result = "Player won";
    }else if(playerSelection==computerSelection.strength){
        result = "Computer won";
    }else{
        result = "Tie";
    }

    return `Player selects ${playerSelection},
    Computer selects ${computerSelection.name},
    Result: ${result}`;

}

function computerPlay(){
    let randNum = Math.floor(Math.random()*3);
    return selections[randNum];
}



  
const playerSelection = "paper";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));




