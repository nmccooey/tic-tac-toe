
function createBoard(){

    //Create board.
    const gameGrid = document.querySelector(".grid");
    for (let i = 0; i < 9; i++) {
        const gameSpot = document.createElement("div");
        gameSpot.className = "game-spot";
        gameSpot.setAttribute("data-index", i);
        gameGrid.appendChild(gameSpot);
    }

    startGame();
}

function startGame() {

    document.querySelectorAll('.game-spot').forEach(gameSpot => {
        gameSpot.addEventListener('click', event => {
            gameSpot.innerHTML = "X";
        });
    });
}

createBoard();