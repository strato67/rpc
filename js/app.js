var playerScore = 0;
var computerScore = 0;

const buttons = document.querySelectorAll('.selection');

buttons.forEach(button =>{
    
    button.addEventListener('click', e=>{
        const statusBar = document.querySelector('#gamestatus');
        if(playerScore<5 && computerScore<5){
            setImg('player',e.target.id);
            statusBar.innerText = playRound(e.target.id,computerPlay());
        }else{
            let winner = gameEnd();
            
            if(confirm(`${winner}. Play again?`)){
                location.reload();
            }else{
                statusBar.innerText = winner;
            }
        }
                
    })

});

function playRound(playerSelection, computerSelection) {

    let result;
    
    if(playerSelection==computerSelection.weakness){
        ++playerScore;
        //Comment out line below for test cases
        setPlayerScore();
        result = "Player wins this round";
        
    }else if(playerSelection==computerSelection.strength){
        ++computerScore;
        //Comment out line below for test cases
        setComputerScore();
        result = "Computer wins this round";
        
    }else{
        result = "Tie";
    }

    return result;

}

function gameEnd(){

    let winner;
    if(playerScore>computerScore){
        winner = 'You';
    }else{
        winner = 'Computer';
    }
    return `${winner} won the game`;

}

function computerPlay(){
    let randNum = Math.floor(Math.random()*3);
    let compSelection = selections[randNum];
    setImg('comp',compSelection.name);
    return compSelection;
}

function setPlayerScore(){
    const scoreboard = document.querySelector('#playerscore');
    scoreboard.textContent = playerScore;
}

function setComputerScore(){
    const scoreboard = document.querySelector('#computerscore');
    scoreboard.textContent = computerScore;
}

function setImg(user,choice){

    let playImg;
    if(user==='player'){
        playImg = document.querySelector('#playerIMG');
    }else if(user==='comp'){
        playImg = document.querySelector('#compIMG');
    }
      
    let imgpath;

    for(let i = 0; i<selections.length; i++){
        if(selections[i].name==choice){
            imgpath = selections[i].image;
        }

    }

    const imageSelection = document.createElement('img');
    imageSelection.setAttribute('src',`${imgpath}`);
    imageSelection.setAttribute('width','256px');
    imageSelection.setAttribute('height','256px');

    playImg.innerHTML='';
    playImg.appendChild(imageSelection);
    
}
module.exports = playRound;