var playerScore = 0;
var computerScore = 0;

const buttons = document.querySelectorAll('.selections');

buttons.forEach(button =>{
    
    button.addEventListener('click', e=>{
        const statusBar = document.querySelector('#gamestatus');
        if(playerScore<5 && computerScore<5){
            setPlayerImg(e.target.id);
            statusBar.innerText = playRound(e.target.id);
        }else{
            statusBar.innerText = 'Game over';
        }
            
        
    })


});


function playRound(playerSelection, computerSelection=computerPlay()) {

    let result;
    setCompImg(computerSelection.name);
    if(playerSelection==computerSelection.weakness){
        result = "Player won";
        ++playerScore;
        setPlayerScore();
    }else if(playerSelection==computerSelection.strength){
        result = "Computer won";
        ++computerScore;
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

function setPlayerImg(choice){
    const playImg = document.querySelector('#playerIMG');
    
    let imgpath;

    for(let i = 0; i<selections.length; i++){
        if(selections[i].name==choice){
            imgpath = selections[i].image;
        }

    }

    const imageSelection = document.createElement('img');
    imageSelection.setAttribute('src',`${imgpath}`);
    imageSelection.setAttribute('width','128px;');
    imageSelection.setAttribute('height','128px;');

    playImg.innerHTML='';
    playImg.appendChild(imageSelection);
    

}
function setCompImg(choice){
    const compImg = document.querySelector('#compIMG');
    
    let imgpath;

    for(let i = 0; i<selections.length; i++){
        if(selections[i].name==choice){
            imgpath = selections[i].image;
        }

    }

    const imageSelection = document.createElement('img');
    imageSelection.setAttribute('src',`${imgpath}`);
    imageSelection.setAttribute('width','128px;');
    imageSelection.setAttribute('height','128px;');


    compImg.innerHTML='';
    compImg.appendChild(imageSelection);
}





