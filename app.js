
//console.log(selections[0].name);

function playRound(playerSelection, computerSelection) {

    if(playerSelection==computerSelection.weakness){
        return "Player won";
    }else if(playerSelection==computerSelection.strength){
        return "Computer won";
    }else{
        return "Tie";
    }

}

function computerPlay(){
    let randNum = Math.floor(Math.random()*3);
    return selections[randNum];
}



  
const playerSelection = "paper";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));




