let on = false;
let computerTurn;
let turn
let numColorSequence;
let sequenceArrayIndex;
// let flashSequenceArr = [];
let playerResults = [];
let newFlashArray = [];

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
    setInterval(gameTurn, 1000);
}


function gameTurn(){
    console.log("this is game turn")
     let newFlashArray = numColorSequence.slice(0, sequenceArrayIndex + 1);
    console.log(newFlashArray)

    if (computerTurn) {
        turnCounter.innerHTML = turn++

        let winningScore = turnCounter.innerHTML;
            if(winningScore > 5){
                win();
            }
           
        if(newFlashArray[sequenceArrayIndex] == 1) {
                previousNumbers(newFlashArray);
                // one();
            } else if (newFlashArray[sequenceArrayIndex] == 2) {
                previousNumbers(newFlashArray);
                // two();
            } else if (newFlashArray[sequenceArrayIndex] == 3) {
                previousNumbers(newFlashArray);
                // three();
            } else if (newFlashArray[sequenceArrayIndex] == 4) {
                previousNumbers(newFlashArray);
                // four();
            } else {
                alert("there has been an error")
            }

    } else {
        clearColor()
        computerTurn = false;
    }
};

function previousNumbers(array){
    console.log("this is previous numbs array")
    // array.pop();
    console.log(array)

    array.forEach((item, index) => {
        setTimeout(() => {
            if (item == 1){
                one();
            } else if (item == 2){
                two();
            } else if (item == 3){
                three();
            } else if (item == 4){
                four();
            } else {
                console.log(error)
            };
        }, index * 1000);
    });
};

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
    computerTurn = false;
    one()
})

topRight.addEventListener('click', (event) => {
    playerResults.push(2)
    checkCorrect()
    computerTurn = false;
    two()
})

bottomLeft.addEventListener('click', (event) => {
    playerResults.push(3)
    checkCorrect()
    computerTurn = false;
    three()
})

bottomRight.addEventListener('click', (event) => {
    playerResults.push(4)
    checkCorrect()
    computerTurn = false;
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

        // numColorSequence.slice(sequenceArrayIndex and backwards)
        // let newFlashArray = numColorSequence.slice(0, sequenceArrayIndex);
        // console.log(newFlashArray)
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
};