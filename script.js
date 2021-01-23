let on = false;
let computerTurn;
let intervalId;
let turn = []
let sequenceArrayIndex;

const playButton = document.querySelector("#playbutton");
const turnCounter = document.querySelector("#turn");
const newGame = document.querySelector("#newgame");
const topLeft = document.querySelector("#topleft");
const topRight = document.querySelector("#topright");
const bottomLeft = document.querySelector("#bottomleft");
const bottomRight = document.querySelector("#bottomright");



playButton.addEventListener('click', (event) => {
        on = true;
        play()
})

newGame.addEventListener('click', (event) => {
     on = false;
     computerTurn = false;
     turnCounter.innerHTML = "";
})

function play() {
    turnCounter.innerHTML = 1;
    turn = 1;
    sequenceArrayIndex = 0;
    numColorSequence = [];
    intervalId = 0;

    for (let i = 0; i < 10; i++){
        numColorSequence.push(Math.floor(Math.random() * 4) + 1)
    }

    console.log(numColorSequence)

    computerTurn = true;
    intervalId = setInterval(gameTurn, 800);
}

function gameTurn(){
    on = false;

    if (computerTurn) {
        clearColor();
        setTimeout(() => {
            if(numColorSequence[sequenceArrayIndex] == 1) one();
            if(numColorSequence[sequenceArrayIndex] == 2) two();
            if(numColorSequence[sequenceArrayIndex] == 3) three();
            if(numColorSequence[sequenceArrayIndex] == 4) four();
        }, 200)
    } else {
        clearColor();
        computerTurn = false;
    }
}

function one() {
    topLeft.style.backgroundColor = "yellow";
};

function two() {
    topRight.style.backgroundColor = "yellowgreen";
};

function three() {
    bottomLeft.style.backgroundColor = "lightsteelblue";
};

function four() {
    bottomRight.style.backgroundColor = "pink";
};


function clearColor() {
    topLeft.style.backgroundColor = "goldenrod";
    topRight.style.backgroundColor = "green";
    bottomLeft.style.backgroundColor = "lightskyblue";
    bottomRight.style.backgroundColor = "red";
}