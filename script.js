let on = false;
let computerTurn;
let intervalId;
let order = []

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
     turnCounter.innerHTML = "";
})

function play() {
    turnCounter.innerHTML = 1;
    turn = 1;
    lightUp = 0;
    colorSequence = [];

    for (let i = 0; i < 10; i++){
        colorSequence.push(Math.floor(Math.random() * 4) + 1)
    }

    console.log(colorSequence)

    computerTurn = true;
    intervalId = setInterval(gameTurn, 800);
}

function gameTurn(){
    on = false;

    if (computerTurn) {
        clearColor();

    }

}


function clearColor() {
    topLeft.style.backgroundColor = "goldenrod";
    topRight.style.backgroundColor = "green";
    bottomLeft.style.backgroundColor = "lightskyblue";
    bottomRight.style.backgroundColor = "red";
}