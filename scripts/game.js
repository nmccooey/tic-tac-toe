
let board = [];

function menuSetup() {
    const playerVSPlayerButton = document.querySelector("#pvp-button");
    const playerVSComputerButton = document.querySelector("#pvc-button");
    
    // Overlay is visble.
    document.querySelector(".overlay").style.display = "flex";
    board = ["","","","","","","","",""];

    playerVSPlayerButton.addEventListener('click', playerVSPlayer, {capture: true, once: true});
    playerVSComputerButton.addEventListener('click', playerVSComputer, {capture: true, once: true});

    function playerVSPlayer() {
        // Clear text in any children divs that are currently in the grid.
        document.querySelectorAll('.game-spot').forEach(gameSpot => {
            gameSpot.innerHTML = "";
        });
    
        document.querySelector(".overlay").style.display = "none";
        startGame();
    }

    function playerVSComputer() {
        alert("In Progess");
    }
}

// Only called 1 time - when the page is loaded.
function createBoard() {
    //Create board.
    const gameGrid = document.querySelector(".grid");
    for (let i = 0; i < 9; i++) {
        const gameSpot = document.createElement("div");
        gameSpot.className = "game-spot";
        gameSpot.setAttribute("data-index", i);
        gameGrid.appendChild(gameSpot);
    }
}

function startGame() {
    let currentPlay = "X";

    document.querySelectorAll('.game-spot').forEach(gameSpot => {
        gameSpot.addEventListener('click', event => {
            if (gameSpot.innerHTML == "") {
                gameSpot.innerHTML = currentPlay;
                board[gameSpot.getAttribute("data-index")] = currentPlay;
                let winner = winTest(board, currentPlay);
                if (winner == "X" || winner == "O") {
                    setTimeout(function() {
                        alert(`The winner is ${winner}`);
                        menuSetup();
                    }, 2)
                } else if (winner == "tie") {
                    setTimeout(function() {
                        alert(`It's a Tie!`);
                        menuSetup();
                    }, 2)
                }
            }

            // Change player.
            if (currentPlay === "X") {
                currentPlay = "O";
            } else {
                currentPlay = "X";
            }
        });
    });
}

function winTest(board, side) {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
    ];

    for (let i = 0; i < winConditions.length; i++) { 
        let sum = 0;
        let w = winConditions[i];
        
        for(let b = 0; b < w.length; b++) {
            if(board[w[b]] === side) {
                sum++
            }
        }
        
        if(sum === 3) {
            return side;
        }

        // check tie:
        let spotsTaken = 0;
        for(let i = 0; i < board.length; i++) {
            if(board[i] !== "") {
                spotsTaken++;
            }
        }

        if (spotsTaken == 9) {
            return "tie";
        } 
    }

    return false;
}

// Geneterates a random number between min and max inclusive.
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

createBoard();
menuSetup();