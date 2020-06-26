const newGameButton = document.querySelector(".new-game");
newGameButton.addEventListener("click", startGame);

function startGame(){
    newGameButton.disabled = true;

    //Create board.
    const gameContainer = document.querySelector(".game-container");
    for (let i = 0; i < 9; i++) {
        const gameSpot = document.createElement("div");
        gameSpot.className = "game-spot";
        gameContainer.appendChild(gameSpot);
    }
}