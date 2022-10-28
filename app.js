"use strict"
const cells = document.querySelectorAll(".cell");
const announcment = document.querySelector("#announcment");
const restart = document.querySelector("#restart");
const submitButton = document.querySelector("#submit");
const dialog = document.querySelector("dialog");

const player1 = makeUser();
const player2 = makeUser();
let arrGameBoard = ["", "", "", "", "", "", "", "", "",];
let currentPlayer = "O";
let gameActive = true;



const winningCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]


function startGame() {
    cells.forEach((cell) => cell.addEventListener("click", cellUpdateDisplay));
    restart.addEventListener("click", restartGame);
}

function cellUpdateDisplay() {
    let currentIndex = this.dataset.index;
    if(arrGameBoard[currentIndex] == ""){
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        this.textContent = currentPlayer;
        arrGameBoard[currentIndex] = currentPlayer;
        displayPlayerTurn(currentPlayer);
        checkWin();
    }
}

// Announce about next player move
function displayPlayerTurn(OppositePlayer) {
    OppositePlayer = OppositePlayer === "X" ? "O" : "X";
    announcment.textContent = `${OppositePlayer} Turn`;
}

function restartGame() {
    arrGameBoard = ["", "", "", "", "", "", "", "", "",];
    cells.forEach((cell) => cell.textContent = "");
    cells.forEach((cell) => cell.addEventListener("click", cellUpdateDisplay));
    announcment.textContent = "X Turn";
    currentPlayer = "O";
}

function checkWin() {
    for(let i = 0; i < winningCondition.length; i++){
        const condition = winningCondition[i];
        const a = arrGameBoard[condition[0]];
        const b = arrGameBoard[condition[1]];
        const c = arrGameBoard[condition[2]];
        if(a != "" && b != "" && c != ""){
            if(a === b && b === c){
                currentPlayer = a === "X" ? player1 : player2;
                announcment.innerHTML = `${currentPlayer.name} is the Winner`;  
                cells.forEach((cell) => cell.removeEventListener("click", cellUpdateDisplay));
            }
        }
    }
    
    arrGameBoard = Array.from(arrGameBoard);

    if(arrGameBoard.every((item) => item != "")){
        announcment.innerHTML = `Draw GG!`;  
        cells.forEach((cell) => cell.removeEventListener("click", cellUpdateDisplay));    
    }
}

function makeUser(name) {
    return {name};
}


dialog.onload = dialog.showModal();
submitButton.addEventListener("click", (e) => {
    player1.name = document.querySelector("#player1-name").value;
    player2.name = document.querySelector("#player2-name").value;
    if(!player1.name || !player2.name){
        console.log("Enter");
    }else{
        dialog.close();
    }

    e.preventDefault();
})


startGame();



