let on = false;
let computerTurn;
let turn
let sequenceArrayIndex;
let numColorSequence;
let playerResults = [];

const playButton = document.querySelector("#playbutton");
const turnCounter = document.querySelector("#turn");
const newGame = document.querySelector("#newgame");
const topLeft = document.querySelector("#topleft");
const topRight = document.querySelector("#topright");
const bottomLeft = document.querySelector("#bottomleft");
const bottomRight = document.querySelector("#bottomright");


playButton.addEventListener('click', (event) => {
        on = true;
        startPlay()
})

newGame.addEventListener('click', (event) => {
     on = false;
     computerTurn = false;
     turnCounter.innerHTML = "";
})

function startPlay() {  
    turn = 1;
    turnCounter.innerHTML = turn;
    sequenceArrayIndex = 0;
    numColorSequence = [];
    playerResults = [];

    for (let i = 0; i < 5; i++){
        numColorSequence.push(Math.floor(Math.random() * 4) + 1)
    }

    // delete this
    console.log(numColorSequence)

    computerTurn = true;
    setInterval(gameTurn, 800);
}


function gameTurn(){
    console.log("this is game turn")
    // on = false;
    if (computerTurn) {
        turnCounter.innerHTML = turn++

        let winningScore = turnCounter.innerHTML;
            if(winningScore > 5){
                win();
            }

        // clearColor();
        setTimeout(() => {
            if(numColorSequence[sequenceArrayIndex] == 1) one();
            if(numColorSequence[sequenceArrayIndex] == 2) two();
            if(numColorSequence[sequenceArrayIndex] == 3) three();
            if(numColorSequence[sequenceArrayIndex] == 4) four();
        }, 200)
    } else {
        clearColor()
        computerTurn = false;
    }
}



function one() {
    topLeft.style.backgroundColor = "yellow";
    computerTurn = false;
    // console.log(computerTurn) is false;
};

function two() {
    topRight.style.backgroundColor = "yellowgreen";
    computerTurn = false;
};

function three() {
    bottomLeft.style.backgroundColor = "lightsteelblue";
    computerTurn = false;
};

function four() {
    bottomRight.style.backgroundColor = "pink";
    computerTurn = false;
};

function clearColor() {
    topLeft.style.backgroundColor = "goldenrod";
    topRight.style.backgroundColor = "green";
    bottomLeft.style.backgroundColor = "blue";
    bottomRight.style.backgroundColor = "red";
}

// function userClickFlash() {
//     topLeft.style.backgroundColor = "yellow";
//     topRight.style.backgroundColor = "yellowgreen";
//     bottomLeft.style.backgroundColor = "lightsteelblue";
//     bottomRight.style.backgroundColor = "pink";
// }

topLeft.addEventListener('click', (event) => {
    playerResults.push(1)
    checkCorrect()
    computerTurn = false; //don't know if i need this
    one()
})

topRight.addEventListener('click', (event) => {
    playerResults.push(2)
    checkCorrect()
    two()
})

bottomLeft.addEventListener('click', (event) => {
    playerResults.push(3)
    checkCorrect()
    three()
})

bottomRight.addEventListener('click', (event) => {
    playerResults.push(4)
    checkCorrect()
    four()
})

function checkCorrect(){

    if (playerResults[playerResults.length-1] == numColorSequence[sequenceArrayIndex]){
        
        console.log("success!");
        console.log(playerResults)
  
        // clearColor()
        sequenceArrayIndex++
        console.log(sequenceArrayIndex)
        computerTurn = true;
        gameTurn()

    } else {
        playerResults.pop();
        alert("wrong selection")
        console.log(playerResults)
    }
}

function win(){
    alert("you won!")
    startPlay()
}